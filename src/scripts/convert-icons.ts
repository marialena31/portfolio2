import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ICON_SIZES = [32, 48, 72, 96, 144, 192, 256, 384, 512];
const SOURCE_ICON = path.join(__dirname, '../src/images/icons/icon-512x512.png');
const OUTPUT_DIR = path.join(__dirname, '../src/images/icons');

async function generateIcons(): Promise<void> {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate icons for each size
    for (const size of ICON_SIZES) {
      const outputPath = path.join(OUTPUT_DIR, `icon-${size}x${size}.png`);
      await sharp(SOURCE_ICON).resize(size, size).toFile(outputPath);

      console.log(`✓ Generated ${size}x${size} icon`);
    }

    console.log('✨ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
