import { open } from 'node:fs/promises';


const write = async () => {
  try {
    const pathToFile = new URL('./files/fileToWrite.txt', import.meta.url);
    const file = await open(pathToFile, 'w' );
    const readableFromTerminal  = process.stdin;
    const writableToFile = file.createWriteStream();

    readableFromTerminal.pipe(writableToFile);
    console.log('Enter "exit" to exit!');

    readableFromTerminal.on('data' , chunk => {
      const chunkStringify = chunk.toString();
      if (chunkStringify.match('exit')) readableFromTerminal.unpipe(writableToFile);
    });
  } catch (err) {
      console.error(`Error occurred: ${err}`);
    }
};

await write();
