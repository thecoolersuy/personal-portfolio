const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();

  // =====================================================
  // 1. Read the image
  // =====================================================

  const imgPath = path.join(__dirname, "public/Hands.png");

  if (!fs.existsSync(imgPath)) {
    console.error("ERROR: public/Hands.png was not found.");

    await browser.close();
    return;
  }

  const imgBuffer = fs.readFileSync(imgPath);

  const imgBase64 = imgBuffer.toString("base64");

  const dataUrl = `data:image/jpeg;base64,${imgBase64}`;

  // =====================================================
  // 2. Process image inside the browser
  // =====================================================

  const results = await page.evaluate(async (dataUrl) => {
    // Characters from lightest/sparsest
    // to darkest/densest.
    const chars = " .:-=+*".split("");

    // These MUST match the sizes that
    // our React component will request.
    const sizes = [800, 500, 450];

    const data = {};

    // ---------------------------------------------------
    // Load image
    // ---------------------------------------------------

    const img = new Image();

    img.src = dataUrl;

    await new Promise((resolve, reject) => {
      img.onload = resolve;

      img.onerror = reject;
    });

    // ===================================================
    // 3. Generate particles for every size
    // ===================================================

    for (const size of sizes) {
      const canvasWidth = size;
      const canvasHeight = size;

      const canvas = document.createElement("canvas");

      const ctx = canvas.getContext("2d");

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // -------------------------------------------------
      // Scale image into canvas
      // -------------------------------------------------

      const scale = 0.9;

      const imgAspect = img.width / img.height;

      let drawWidth = canvasWidth * scale;

      let drawHeight = drawWidth / imgAspect;

      // Make sure image fits vertically
      if (drawHeight > canvasHeight * scale) {
        drawHeight = canvasHeight * scale;

        drawWidth = drawHeight * imgAspect;
      }

      // Center image
      const offsetX = (canvasWidth - drawWidth) / 2;

      const offsetY = (canvasHeight - drawHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // -------------------------------------------------
      // Get all pixels
      // -------------------------------------------------

      const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

      const pixels = imageData.data;

      const particles = [];

      // -------------------------------------------------
      // Particle spacing
      // -------------------------------------------------

      const isMobileSize = size <= 280;

      const fontSize = isMobileSize ? 5 : 7;

      const colGap = fontSize * 0.7;

      const rowGap = fontSize * 1.1;

      // =================================================
      // 4. Convert bright pixels into particles
      // =================================================

      for (let y = 0; y < canvasHeight; y += rowGap) {
        for (let x = 0; x < canvasWidth; x += colGap) {
          const pixelX = Math.floor(x);

          const pixelY = Math.floor(y);

          const i = (pixelY * canvasWidth + pixelX) * 4;

          const r = pixels[i];

          const g = pixels[i + 1];

          const b = pixels[i + 2];

          // -------------------------------------------
          // Calculate brightness
          // -------------------------------------------

          const brightness = (r + g + b) / (3 * 255);

          // -------------------------------------------
          // IMPORTANT
          //
          // Your image has a BLACK background.
          //
          // Black = brightness 0
          // White = brightness 1
          //
          // Ignore almost-black pixels.
          // -------------------------------------------

          if (brightness < 0.08) {
            continue;
          }

          // -------------------------------------------
          // Select ASCII character
          // -------------------------------------------

          const charIndex = Math.floor(brightness * (chars.length - 1));

          const char = chars[charIndex];

          // -------------------------------------------
          // Store particle
          // -------------------------------------------

          particles.push({
            x: Number(x.toFixed(1)),

            y: Number(y.toFixed(1)),

            char,

            alpha: Number((0.45 + brightness * 0.55).toFixed(2)),
          });
        }
      }

      data[size] = particles;

      console.log(`Generated ${particles.length} particles for ${size}px`);
    }

    return data;
  }, dataUrl);

  // =====================================================
  // 5. Create src/assets directory if necessary
  // =====================================================

  const assetsDirectory = path.join(__dirname, "src/assets");

  if (!fs.existsSync(assetsDirectory)) {
    fs.mkdirSync(assetsDirectory, {
      recursive: true,
    });
  }

  // =====================================================
  // 6. Generate asciiData.js
  // =====================================================

  const output = `
export const asciiData = ${JSON.stringify(results)};
`;

  const outputPath = path.join(assetsDirectory, "asciiData.js");

  fs.writeFileSync(outputPath, output);

  console.log("");
  console.log("======================================");
  console.log("ASCII HAND DATA GENERATED SUCCESSFULLY");
  console.log("======================================");
  console.log(`File: ${outputPath}`);

  await browser.close();
})();
