import fs from 'node:fs/promises';


const remove = async () => {
  const pathToFile = new URL('./files/fileToRemove.txt', import.meta.url);
  try {
    await fs.unlink(pathToFile);
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

await remove();
