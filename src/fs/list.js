import { readdir } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";
import { errorMessage } from '../lib/errorMessage.js';

const pathToDir = getPathToFile(import.meta.url, 'files');

const list = async () => {
  try {
    const fileNames = await readdir(pathToDir);
    console.log({ ...fileNames });
  } catch (err) {
    console.error(err);
    throw Error(errorMessage);
  }
};

await list();
