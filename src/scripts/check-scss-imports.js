const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../');

function checkScssFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Vérifier que l'import des variables est correct
  const importRegex = /^@use ['"]variables['"] as \*;/;
  if (!importRegex.test(content)) {
    console.log(`⚠️ Warning in ${filePath}: Incorrect variables import`);

    // Afficher la ligne d'importation actuelle
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.includes('@use') && line.includes('variables')) {
        console.log(`  Line ${index + 1}: ${line.trim()}`);
      }
    });
  }
}

function findScssFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...findScssFiles(fullPath));
    } else if (stats.isFile() && item.endsWith('.module.scss')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Trouver et vérifier tous les fichiers SCSS
const scssFiles = findScssFiles(baseDir);
console.log(`Found ${scssFiles.length} SCSS files to check`);

scssFiles.forEach(file => {
  try {
    checkScssFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log('SCSS import checking completed.');
