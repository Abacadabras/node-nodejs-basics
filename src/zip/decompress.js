import { open } from "node:fs/promises";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToReadFile = getPathToFile(import.meta.url, 'files', 'archive.gz');
const pathToWriteFile = getPathToFile(import.meta.url, 'files', 'fileToCompress.txt');

const decompress = async () => {
  try {
    const fileRead = await open(pathToReadFile);
    const readableFromFile = fileRead.createReadStream();

    const fileWrite = await open(pathToWriteFile, 'w');
    const writableToFile = fileWrite.createWriteStream();

    const unzip = createUnzip();

    await pipeline(readableFromFile, unzip, writableToFile);
  } catch (err) {
    throw err;
  }
};

await decompress();
