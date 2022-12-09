import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';


const transform = async () => {
  const readableFromTerminal = process.stdin;
  const writableToTerminal = process.stdout;
  console.log('Enter "exit" to exit!');
  try {
    const transformStream = new Transform({
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
    await pipeline(readableFromTerminal, transformStream, writableToTerminal);
  } catch (err) {
    throw err;
  }
};

await transform();
