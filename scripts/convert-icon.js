const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../src/images/gatsby-icon.svg');
const outputPath = path.join(__dirname, '../src/images/gatsby-icon.png');

sharp(inputPath)
  .resize(512, 512)
  .png()
  .toFile(outputPath)
  .then(info => { console.log('Icon converted successfully:', info); })
  .catch(err => { console.error('Error converting icon:', err); });
