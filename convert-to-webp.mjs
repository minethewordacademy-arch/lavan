import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public/images/projects');

const files = fs.readdirSync(dir).filter(file => {
  return /\.(jpg|jpeg|png)$/i.test(file);
});

async function convertToWebp() {
  for (const file of files) {
    const name = path.parse(file).name;
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, `${name}.webp`);

    try {
      await sharp(oldPath)
        .webp({ quality: 85 })
        .toFile(newPath);
      
      fs.unlinkSync(oldPath);
      console.log(`✅ Converted: ${file} → ${name}.webp`);
    } catch (error) {
      console.error(`❌ Failed on ${file}:`, error.message);
    }
  }
  console.log('🎉 All images converted to WebP!');
}

convertToWebp();