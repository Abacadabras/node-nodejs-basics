import fs from 'node:fs/promises';


const list = async () => {
  const pathToDir = new URL('./files/', import.meta.url);
  try {
    const fileNames = await fs.readdir(pathToDir);
    fileNames.forEach((fileName) => console.log(fileName));
  } catch {
     console.error(new Error('FS operation failed'));
  }
};

await list();
