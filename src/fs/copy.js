import fs from 'node:fs/promises';


const copy = async () => {
  const srcDir = new URL('./files/', import.meta.url);
  const distDir = new URL('./files-copy/', import.meta.url);
  try {
    await fs.cp(srcDir, distDir, { recursive: true, force: false, errorOnExist: true });
  } catch {
      console.error(new Error('FS operation failed'));
  }
};

await copy();
