import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import glob from 'glob';

const IMAGES_DIR = path.join(__dirname, '../src/images');
const EXTENSIONS = ['jpg', 'jpeg', 'png'];

interface OptimizationResult {
  file: string;
  originalSize: number;
  optimizedSize: number;
}

async function optimizeImages(): Promise<void> {
  try {
    const results: OptimizationResult[] = [];
    let totalSaved = 0;

    // Find all images
    const files = EXTENSIONS.map(ext => glob.sync(`${IMAGES_DIR}/**/*.${ext}`)).flat();

    for (const file of files) {
      const originalSize = fs.statSync(file).size;
      const optimized = await sharp(file).jpeg({ quality: 85, progressive: true }).toBuffer();

      // Write optimized image back to file
      await fs.promises.writeFile(file, optimized);

      const newSize = optimized.length;
      const saved = originalSize - newSize;
      totalSaved += saved;

      results.push({
        file: path.relative(IMAGES_DIR, file),
        originalSize,
        optimizedSize: newSize,
      });
    }

    // Log results
    console.log('\n📊 Optimization Results:\n');
    results.forEach(({ file, originalSize, optimizedSize }) => {
      const savedPercent = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);
      console.log(`✓ ${file}`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(1)}KB`);
      console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
      console.log(`  Saved: ${savedPercent}%\n`);
    });

    console.log(`\n✨ Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
