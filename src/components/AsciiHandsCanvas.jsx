import React, { useEffect, useRef } from "react";

const PARTICLE_COLOR = "#48b8a6";
const CHARSET = [".", ".", ".", "#", "=", "+", "*"];

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function chooseChar(weight) {
  if (weight > 0.88) {
    return ".";
  }
  if (weight > 0.72) {
    return Math.random() < 0.88 ? "." : "#";
  }
  if (weight > 0.56) {
    return Math.random() < 0.7 ? "=" : "+";
  }
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

function extractDotParticles(imageData, width, height) {
  const data = imageData.data;
  const bright = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = y * width + x;
      const p = i * 4;
      const a = data[p + 3];
      if (a < 10) {
        continue;
      }
      const l = luminance(data[p], data[p + 1], data[p + 2]);
      // A high threshold keeps neighboring rows from merging into one blob.
      if (l > 236) {
        bright[i] = 1;
      }
    }
  }

  // Remove fragile bridge pixels that can incorrectly connect adjacent dots.
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const i = y * width + x;
      if (!bright[i]) {
        continue;
      }

      let neighbors = 0;
      for (let oy = -1; oy <= 1; oy += 1) {
        for (let ox = -1; ox <= 1; ox += 1) {
          if (ox === 0 && oy === 0) {
            continue;
          }
          if (bright[(y + oy) * width + (x + ox)]) {
            neighbors += 1;
          }
        }
      }

      if (neighbors <= 1) {
        bright[i] = 0;
      }
    }
  }

  const points = [];
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  const queue = [];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const seed = y * width + x;
      if (!bright[seed] || visited[seed]) {
        continue;
      }

      queue.length = 0;
      queue.push(seed);
      visited[seed] = 1;

      let qIdx = 0;
      let count = 0;
      let sumX = 0;
      let sumY = 0;
      let sumW = 0;

      while (qIdx < queue.length) {
        const idx = queue[qIdx];
        qIdx += 1;

        const px = idx % width;
        const py = (idx - px) / width;
        const p = idx * 4;
        const l = luminance(data[p], data[p + 1], data[p + 2]);

        count += 1;
        sumX += px;
        sumY += py;
        sumW += l / 255;

        // 4-neighbor expansion avoids accidental diagonal bridges.
        const neighbors = [
          [px - 1, py],
          [px + 1, py],
          [px, py - 1],
          [px, py + 1],
        ];

        for (const [nx, ny] of neighbors) {
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) {
            continue;
          }

          const nIdx = ny * width + nx;
          if (!bright[nIdx] || visited[nIdx]) {
            continue;
          }

          visited[nIdx] = 1;
          queue.push(nIdx);
        }
      }

      // Ignore tiny specks and huge merged components.
      if (count < 2 || count > 90) {
        continue;
      }

      const cx = sumX / count;
      const cy = sumY / count;
      const weight = Math.min(1, sumW / Math.max(1, count));

      minX = Math.min(minX, cx);
      minY = Math.min(minY, cy);
      maxX = Math.max(maxX, cx);
      maxY = Math.max(maxY, cy);

      points.push({ x: cx, y: cy, weight });
    }
  }

  if (points.length === 0) {
    return { points: [], aspect: 2.4 };
  }

  const boxW = Math.max(1, maxX - minX);
  const boxH = Math.max(1, maxY - minY);

  const normalized = points.map((p) => ({
    u: (p.x - minX) / boxW,
    v: (p.y - minY) / boxH,
    char: chooseChar(p.weight),
  }));

  return {
    points: normalized,
    aspect: boxW / boxH,
  };
}

export default function AsciiHandsCanvas({ className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const templateRef = useRef({ points: [], aspect: 2.4 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let rafId = 0;
    let particles = [];
    let cssWidth = 0;
    let cssHeight = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const mouse = {
      x: -10000,
      y: -10000,
      active: false,
    };

    function rebuildParticlesFromTemplate() {
      const template = templateRef.current;
      if (!template.points.length) {
        particles = [];
        return;
      }

      particles = template.points.map((point) => {
        const x = point.u * cssWidth;
        const y = point.v * cssHeight;
        return {
          baseX: x,
          baseY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          char: point.char,
        };
      });
    }

    function resize() {
      const rect = container.getBoundingClientRect();
      cssWidth = Math.max(280, Math.floor(rect.width));

      const templateAspect = Math.max(
        1.8,
        Math.min(3.4, templateRef.current.aspect || 2.4),
      );
      cssHeight = Math.max(150, Math.floor(cssWidth / templateAspect));

      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = '10.4px "JetBrains Mono", "Fira Code", monospace';

      rebuildParticlesFromTemplate();
    }

    function animate() {
      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.fillStyle = PARTICLE_COLOR;

      const radius = 84;

      for (const p of particles) {
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          if (distance < radius) {
            const safeDistance = Math.max(0.001, distance);
            const push = (1 - safeDistance / radius) * 3.8;
            p.vx += (dx / safeDistance) * push;
            p.vy += (dy / safeDistance) * push;
          }
        }

        p.vx += (p.baseX - p.x) * 0.07;
        p.vy += (p.baseY - p.y) * 0.07;
        p.vx *= 0.78;
        p.vy *= 0.78;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillText(p.char, p.x, p.y);
      }

      rafId = window.requestAnimationFrame(animate);
    }

    function handlePointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    }

    function handlePointerLeave() {
      mouse.active = false;
      mouse.x = -10000;
      mouse.y = -10000;
    }

    async function buildTemplateFromImage() {
      const image = new Image();
      image.decoding = "async";
      image.src = "/ASCII.jpg";

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });

      const offscreen = document.createElement("canvas");
      offscreen.width = image.naturalWidth;
      offscreen.height = image.naturalHeight;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });

      if (!offCtx) {
        return;
      }

      offCtx.drawImage(image, 0, 0, offscreen.width, offscreen.height);
      const imageData = offCtx.getImageData(
        0,
        0,
        offscreen.width,
        offscreen.height,
      );

      templateRef.current = extractDotParticles(
        imageData,
        offscreen.width,
        offscreen.height,
      );
      resize();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    resizeObserver.observe(container);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    buildTemplateFromImage()
      .catch(() => {
        templateRef.current = { points: [], aspect: 2.4 };
        resize();
      })
      .finally(() => {
        animate();
      });

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[560px] rounded-[8px] overflow-hidden ${className}`}
      aria-label="Interactive ASCII hands artwork"
    >
      <canvas ref={canvasRef} className="block w-full h-auto" />
    </div>
  );
}
