import { readFile } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";
import { errorMessage } from '../lib/errorMessage.js';


const pathToFile = getPathToFile(import.meta.url,'files', 'fileToRead.txt');

const read = async () => {
  try {
    const dataToFile = await readFile(pathToFile, 'utf8');
    console.log(dataToFile);
  } catch (err) {
    console.error(err);
    throw Error(errorMessage);
  }
};

await read();
