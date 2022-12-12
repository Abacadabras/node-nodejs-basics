import crypto from 'node:crypto';
import fs from 'node:fs/promises';


const calculateHash = async () => {
  try {
    const pathToFile = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
    const dataFile = await fs.readFile(pathToFile);
    const hexFile = crypto.createHash('sha256').update(dataFile).digest('hex');
    console.log(hexFile);
  } catch (err) {
      console.error(`Error occurred: ${err}`);
    }
};

await calculateHash();
