import { open } from "node:fs/promises";
import { createGzip }  from 'node:zlib';
import { pipeline } from 'node:stream/promises';



const compress = async () => {
  try {
    const pathToReadFile = new URL('./files/fileToCompress.txt', import.meta.url);
    const fileRead = await open(pathToReadFile);
    const readableFromFile = fileRead.createReadStream();

    const pathToWriteFile = new URL('./files/archive.gz', import.meta.url);
    const fileWrite = await open(pathToWriteFile, 'w');
    const writableToFile = fileWrite.createWriteStream();

    const gzip = createGzip();

    await pipeline(readableFromFile, gzip, writableToFile);
  } catch (err) {
      console.error(`Error occurred: ${err}`);
  }
};

await compress();
