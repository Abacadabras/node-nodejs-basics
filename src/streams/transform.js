import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';


const transform = async () => {
  try {
    const readableFromTerminal = process.stdin;
    const writableToTerminal = process.stdout;

    console.log('Enter "exit" to exit!');

    const transform = new Transform({
      transform(chunk, enc, cb) {
        const chunkStringify = chunk.toString().trim();
        if (chunkStringify.match('exit')) {
          readableFromTerminal.unpipe(transform);
        } else {
          const reversedChunk = chunkStringify.split('').reverse().join('');
          cb(null, reversedChunk + '\n');
        }
      }
    });

    await pipeline(readableFromTerminal, transform, writableToTerminal);
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
};

await transform();
