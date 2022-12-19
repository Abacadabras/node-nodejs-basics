import { fork } from 'child_process';
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToFile =  getPathToFile( import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(pathToFile, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

await spawnChildProcess(['first', 'second']);
