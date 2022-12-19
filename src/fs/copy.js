import { readdir, mkdir, copyFile} from 'node:fs/promises';
import { join } from 'path';
import { getPathToFile } from "../lib/getPathToFile.js";
import { errorMessage } from '../lib/errorMessage.js';


const srcDir = getPathToFile(import.meta.url, 'files');
const distDir = getPathToFile(import.meta.url, 'files-copy');

const copy = async (src, dist) => {
  try {
    const [dataFolder] = await Promise.all([readdir(src, {withFileTypes: true}), mkdir(dist, {recursive: true})]);
    const files = [];
    for (const file of dataFolder) {
      if (file.isFile()) {
        files.push(copyFile(join(src, file.name), join(dist, file.name)));
      } else if (file.isDirectory()) {
        await Promise.all(files);
        await copy(join(src, file.name), join(dist, file.name));
      }
    }
  } catch (err) {
    console.error(err);
    throw new Error(errorMessage);
  }
};

await copy(srcDir, distDir);
