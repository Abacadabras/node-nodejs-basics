import { open } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToFile = getPathToFile( import.meta.url,'files', 'fileToRead.txt');

const read = async () => {
  let file;
  try {
    file = await open(pathToFile);
    const readableFromFile = file.createReadStream();
    const writableToTerminal = process.stdout;

    readableFromFile.pipe(writableToTerminal);
  } catch (err) {
    throw err;
  } finally {
    await file?.close();
  }
};

await read();
