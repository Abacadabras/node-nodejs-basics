import { open } from "node:fs/promises";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
  try {
    const pathToReadFile = new URL('./files/archive.gz', import.meta.url);
    const fileRead = await open(pathToReadFile);
    const readableFromFile = fileRead.createReadStream();

    const pathToWriteFile = new URL('./files/fileToCompress.txt', import.meta.url);
    const fileWrite = await open(pathToWriteFile, 'w');
    const writableToFile = fileWrite.createWriteStream();

    const unzip = createUnzip();

    await pipeline(readableFromFile, unzip, writableToFile);
  } catch (err) {
      console.error(`Error occurred: ${err}`);
  }
};

await decompress();
