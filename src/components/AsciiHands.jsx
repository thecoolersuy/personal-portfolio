import React, { useEffect, useRef, useState } from "react";

import { asciiData } from "../assets/asciiData";

// =====================================================
// Determine canvas size from screen width
// =====================================================

const calculateSize = (width) => {
  if (width <= 480) {
    return 450;
  } else if (width <= 768) {
    return 500;
  } else {
    return 800;
  }
};

// =====================================================
// Component
// =====================================================

const AsciiHands = () => {
  const canvasRef = useRef(null);

  // ---------------------------------------------------
  // Current mouse position
  // ---------------------------------------------------

  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    active: false,
  });

  // ---------------------------------------------------
  // Target mouse position
  //
  // We use this so mouse movement is smooth.
  // ---------------------------------------------------

  const mouseTargetRef = useRef({
    x: -1000,
    y: -1000,
  });

  // ---------------------------------------------------
  // All particles
  // ---------------------------------------------------

  const particlesRef = useRef([]);

  // ---------------------------------------------------
  // Animation start time
  // ---------------------------------------------------

  const startTimeRef = useRef(null);

  // ---------------------------------------------------
  // Canvas size
  // ---------------------------------------------------

  const [size, setSize] = useState(() => calculateSize(window.innerWidth));

  const [dataReady, setDataReady] = useState(false);

  // =====================================================
  // Handle responsive size
  // =====================================================

  useEffect(() => {
    const updateSize = () => {
      setSize(calculateSize(window.innerWidth));
    };

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // =====================================================
  // Convert raw ASCII data into animated particles
  // =====================================================

  const createParticlesFromRaw = (rawParticles, isMobileSize) => {
    const fontSize = isMobileSize ? 5 : 7;

    return rawParticles.map((p) => ({
      // -----------------------------------------------
      // Start particles scattered around the canvas
      // -----------------------------------------------

      x: p.x + (Math.random() - 0.5) * 400,

      y: p.y + (Math.random() - 0.5) * 400,

      // -----------------------------------------------
      // Permanent target position
      //
      // This is the actual shape of your hands.
      // -----------------------------------------------

      targetX: p.x,
      targetY: p.y,

      // -----------------------------------------------
      // Velocity
      // -----------------------------------------------

      vx: 0,
      vy: 0,

      // -----------------------------------------------
      // ASCII character
      // -----------------------------------------------

      char: p.char,

      // -----------------------------------------------
      // Font
      // -----------------------------------------------

      fontSize,

      // -----------------------------------------------
      // Opacity
      // -----------------------------------------------

      baseAlpha: p.alpha,
      currentAlpha: 0,

      // -----------------------------------------------
      // Random delay
      // -----------------------------------------------

      delay: Math.random() * 0.4,

      // -----------------------------------------------
      // Random shimmer phase
      // -----------------------------------------------

      shimmer: Math.random() * Math.PI * 2,
    }));
  };

  // =====================================================
  // Load ASCII data
  // =====================================================

  useEffect(() => {
    const isMobileSize = size <= 450;

    const rawParticles = asciiData[size];

    // -----------------------------------------------
    // Make sure data exists
    // -----------------------------------------------

    if (!rawParticles) {
      console.warn(`No ASCII data found for size ${size}`);

      return;
    }

    // -----------------------------------------------
    // Convert raw particles to animated particles
    // -----------------------------------------------

    particlesRef.current = createParticlesFromRaw(rawParticles, isMobileSize);

    startTimeRef.current = performance.now();

    setDataReady(true);
  }, [size]);

  // =====================================================
  // Main animation
  // =====================================================

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !dataReady) {
      return;
    }

    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    // ---------------------------------------------------
    // High DPI canvas
    // ---------------------------------------------------

    canvas.width = size * dpr;

    canvas.height = size * dpr;

    ctx.scale(dpr, dpr);

    let animationId;

    // ===================================================
    // Animation loop
    // ===================================================

    const draw = () => {
      animationId = requestAnimationFrame(draw);

      // -----------------------------------------------
      // Clear previous frame
      // -----------------------------------------------

      ctx.clearRect(0, 0, size, size);

      const particles = particlesRef.current;

      const mouse = mouseRef.current;

      const mouseTarget = mouseTargetRef.current;

      // -----------------------------------------------
      // Time since animation started
      // -----------------------------------------------

      const elapsed = (performance.now() - startTimeRef.current) / 1000;

      // -----------------------------------------------
      // Smooth mouse position
      // -----------------------------------------------

      mouse.x += (mouseTarget.x - mouse.x) * 0.15;

      mouse.y += (mouseTarget.y - mouse.y) * 0.15;

      // -----------------------------------------------
      // ASCII font
      // -----------------------------------------------

      const isMobileSize = size <= 280;

      const fontSize = isMobileSize ? 5 : 7;

      ctx.font = `${fontSize}px monospace`;

      ctx.textAlign = "center";

      ctx.textBaseline = "middle";

      // =================================================
      // Update every particle
      // =================================================

      particles.forEach((p) => {
        // ---------------------------------------------
        // Intro delay
        // ---------------------------------------------

        const particleTime = elapsed - p.delay;

        if (particleTime < 0) {
          return;
        }

        // ---------------------------------------------
        // Fade particles in
        // ---------------------------------------------

        const fadeProgress = Math.min(particleTime / 1.5, 1);

        const easedFade = 1 - Math.pow(1 - fadeProgress, 2);

        // ---------------------------------------------
        // Shimmer
        // ---------------------------------------------

        const isActive = mouse.active || particleTime < 3;

        const shimmerVal = isActive
          ? Math.sin(elapsed * 2 + p.shimmer) * 0.1
          : 0;

        p.currentAlpha = Math.max(0, p.baseAlpha * easedFade + shimmerVal);

        // =================================================
        // MOUSE PUSH FORCE
        // =================================================

        if (mouse.active) {
          // Distance from mouse to particle

          const dx = p.x - mouse.x;

          const dy = p.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          // Radius of mouse interaction

          const maxDistance = size * 0.18;

          if (distance < maxDistance && distance > 0) {
            // Stronger when mouse
            // is closer

            const force = (1 - distance / maxDistance) * 4;

            // Push away from mouse

            p.vx += (dx / distance) * force;

            p.vy += (dy / distance) * force;
          }
        }

        // =================================================
        // PULL PARTICLE BACK TO HAND
        // =================================================

        const targetDX = p.targetX - p.x;

        const targetDY = p.targetY - p.y;

        const pullStrength = 0.08;

        p.vx += targetDX * pullStrength;

        p.vy += targetDY * pullStrength;

        // =================================================
        // Natural movement
        // =================================================

        if (isActive) {
          const breathX = Math.sin(elapsed * 0.5 + p.targetY * 0.1) * 0.15;

          const breathY = Math.cos(elapsed * 0.5 + p.targetX * 0.1) * 0.15;

          p.vx += breathX;

          p.vy += breathY;
        }

        // =================================================
        // Friction
        // =================================================

        p.vx *= 0.92;

        p.vy *= 0.92;

        // =================================================
        // Move particle
        // =================================================

        p.x += p.vx;

        p.y += p.vy;

        // =================================================
        // Draw particle
        // =================================================

        ctx.fillStyle = `rgba(
            100,
            255,
            218,
            ${p.currentAlpha}
          )`;

        ctx.fillText(p.char, p.x, p.y);
      });
    };

    // ===================================================
    // Mouse movement
    // ===================================================

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouseTargetRef.current.x = e.clientX - rect.left;

      mouseTargetRef.current.y = e.clientY - rect.top;

      mouseRef.current.active = true;
    };

    // ===================================================
    // Mouse leaves canvas
    // ===================================================

    const handleMouseLeave = () => {
      mouseRef.current.active = false;

      mouseTargetRef.current.x = -1000;

      mouseTargetRef.current.y = -1000;
    };

    // ===================================================
    // Touch support
    // ===================================================

    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const touch = e.touches[0];

      if (!touch) {
        return;
      }

      mouseTargetRef.current.x = touch.clientX - rect.left;

      mouseTargetRef.current.y = touch.clientY - rect.top;

      mouseRef.current.active = true;

      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      handleMouseLeave();
    };

    // ===================================================
    // Attach events
    // ===================================================

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("mouseleave", handleMouseLeave);

    canvas.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    canvas.addEventListener("touchend", handleTouchEnd);

    // ===================================================
    // Start animation
    // ===================================================

    draw();

    // ===================================================
    // Cleanup
    // ===================================================

    return () => {
      cancelAnimationFrame(animationId);

      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("mouseleave", handleMouseLeave);

      canvas.removeEventListener("touchmove", handleTouchMove);

      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [size, dataReady]);

  // =====================================================
  // Canvas
  // =====================================================

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        cursor: "crosshair",
        touchAction: "none",
        display: "block",
      }}
    />
  );
};

export default AsciiHands;
