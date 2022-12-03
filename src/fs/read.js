import fs from 'node:fs/promises';


const read = async () => {
  try {
    const pathToFile = new URL('./files/fileToRead.txt', import.meta.url);
    const dataToFile = await fs.readFile(pathToFile, { encoding: 'utf8'});
    console.log(dataToFile);
  } catch {
      console.error(new Error('FS operation failed'));
    }
};

await read();
