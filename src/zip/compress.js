import { open } from "node:fs/promises";
import { createGzip }  from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToReadFile = getPathToFile(import.meta.url, 'files', 'fileToCompress.txt');
const pathToWriteFile = getPathToFile(import.meta.url, 'files', 'archive.gz');

const compress = async () => {
  try {
    const fileRead = await open(pathToReadFile);
    const readableFromFile = fileRead.createReadStream();

    const fileWrite = await open(pathToWriteFile, 'w');
    const writableToFile = fileWrite.createWriteStream();

    const gzip = createGzip();

    await pipeline(readableFromFile, gzip, writableToFile);
  } catch (err) {
    throw err;
  }
};

await compress();
