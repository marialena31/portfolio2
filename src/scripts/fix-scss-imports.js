const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../');

// Fonction pour corriger un fichier SCSS
function fixScssFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Vérifier et corriger l'import des variables
  const importRegex = /^@use ['"]\./g;
  if (importRegex.test(content)) {
    console.log(`Fixing imports in ${filePath}`);

    // Remplacer les imports relatifs par des imports absolus
    const fixedContent = content.replace(/^@use ['"]\./g, '@use "variables"');

    fs.writeFileSync(filePath, fixedContent, 'utf-8');
  }
}

// Fonction pour trouver tous les fichiers .module.scss
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

// Trouver et corriger tous les fichiers SCSS
const scssFiles = findScssFiles(baseDir);
console.log(`Found ${scssFiles.length} SCSS files to check`);

scssFiles.forEach(file => {
  try {
    fixScssFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log('SCSS import fixing completed.');
