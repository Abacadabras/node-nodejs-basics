import { open } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";
import { errorMessage } from '../lib/errorMessage.js';


const pathToFile = getPathToFile(import.meta.url, 'files', 'fresh.txt');
const dataToFile = 'I am fresh and young';

const create = async () => {
  try {
    const file = await open(pathToFile, 'wx' );
    await file.writeFile(dataToFile);
  } catch (err) {
    console.error(err);
    throw new Error(errorMessage);
  }
};

await create();
