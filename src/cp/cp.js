import { fork } from 'child_process';


const spawnChildProcess = async (args) => {

  const pathToFile = new URL('./files/script.js', import.meta.url);
  const child = fork(pathToFile, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

await spawnChildProcess(['first', 'second']);
