import { createHash } from 'node:crypto';
import { readFile }from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToFile = getPathToFile(import.meta.url, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const dataFile = await readFile(pathToFile);
    const hexFile = createHash('sha256').update(dataFile).digest('hex');
    console.log(hexFile);
  } catch (err) {
    throw err;
  }
};

await calculateHash();
