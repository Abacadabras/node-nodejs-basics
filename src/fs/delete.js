import { rm } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";
import { errorMessage } from '../lib/errorMessage.js';


const pathToFile = getPathToFile(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(pathToFile, {recursive: true});
  } catch (err) {
    console.error(err);
    throw Error(errorMessage);
  }
};

await remove();
