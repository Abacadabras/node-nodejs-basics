import fs from 'node:fs/promises';


const rename = async () => {
  const srcFile = new URL('./files/wrongFilename.txt', import.meta.url);
  const distFile = new URL('./files/properFilename.md', import.meta.url);
  try {
    await fs.rename(srcFile, distFile);
  } catch {
      console.error(new Error('FS operation failed'));
    }
};

await rename();
