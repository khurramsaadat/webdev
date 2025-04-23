const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const imageDirectories = [
  'public/images/hero',
  'public/images/about',
  'public/images/team',
  'public/images/projects',
  'public/images/testimonials'
];

async function optimizeImage(inputPath) {
  const info = await sharp(inputPath).metadata();
  
  // Define output quality based on file size
  const quality = 80;
  
  // Calculate new dimensions while maintaining aspect ratio
  const maxWidth = 1920;
  const maxHeight = 1080;
  
  let width = info.width;
  let height = info.height;
  
  if (width > maxWidth) {
    height = Math.round((height * maxWidth) / width);
    width = maxWidth;
  }
  
  if (height > maxHeight) {
    width = Math.round((width * maxHeight) / height);
    height = maxHeight;
  }
  
  // Create optimized version
  await sharp(inputPath)
    .resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality, mozjpeg: true })
    .toFile(inputPath.replace('.jpg', '.optimized.jpg'));
    
  // Replace original with optimized version
  await fs.unlink(inputPath);
  await fs.rename(inputPath.replace('.jpg', '.optimized.jpg'), inputPath);
  
  console.log(`✓ Optimized: ${path.basename(inputPath)}`);
}

async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg')) {
        const filePath = path.join(directory, file);
        await optimizeImage(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

async function main() {
  console.log('Starting image optimization...');
  
  for (const directory of imageDirectories) {
    console.log(`\nProcessing directory: ${directory}`);
    await processDirectory(directory);
  }
  
  console.log('\nImage optimization completed!');
}

main().catch(console.error); 