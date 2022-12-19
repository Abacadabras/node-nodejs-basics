import { open } from 'node:fs/promises';
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToFile = getPathToFile( import.meta.url,'files', 'fileToWrite.txt');

const write = async () => {
  const readableFromTerminal = process.stdin;
  let file;
  try {
    file = await open(pathToFile, 'a');
    const writableToFile = file.createWriteStream();

    readableFromTerminal.pipe(writableToFile);
    console.log('Enter "exit" to exit!');

    readableFromTerminal.on('data' , chunk => {
      const chunkStringify = chunk.toString();
      if (chunkStringify.match('exit')) readableFromTerminal.unpipe(writableToFile);
    });
  } catch (err) {
    throw err;
  } finally {
    await file?.close();
  }
};

await write();
