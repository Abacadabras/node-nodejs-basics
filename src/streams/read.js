import { open } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';


const read = async () => {
  try {
    const pathToFile = new URL('./files/fileToRead.txt', import.meta.url);
    const file = await open(pathToFile);
    const readableFromFile  = file.createReadStream();
    const writableToTerminal = process.stdout;

    await pipeline(readableFromFile, writableToTerminal);
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
};

await read();
