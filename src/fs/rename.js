import { rename as renameFile } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";
import { errorMessage } from '../lib/errorMessage.js';


const srcFile = getPathToFile(import.meta.url, 'files', 'wrongFilename.txt');
const distFile = getPathToFile(import.meta.url, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await renameFile(srcFile, distFile);
  } catch (err) {
    console.error(err);
    throw Error(errorMessage);
  }
};

await rename();
