const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sizes = [32, 48, 72, 96, 144, 192, 256, 384, 512];
const inputPath = path.join(__dirname, '../src/images/gatsby-icon.svg');
const outputDir = path.join(__dirname, '../src/images/icons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate icons for each size
sizes.forEach(size => {
  const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
  sharp(inputPath)
    .resize(size, size)
    .png()
    .toFile(outputPath)
    .then(info => {
      console.log(`Generated ${size}x${size} icon:`, info);
    })
    .catch(err => {
      console.error(`Error generating ${size}x${size} icon:`, err);
    });
});
