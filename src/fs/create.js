import { open } from 'node:fs/promises';


const create = async () => {
  try {
    const pathToFile = new URL('./files/fresh.txt', import.meta.url);
    const file = await open(pathToFile, 'wx' );
    const dataToFile = 'I am fresh and young';
    await file.writeFile(dataToFile);
  } catch (err) {
      console.error(new Error('FS operation failed'));
    }
};

await create();
