import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { getPathToFile } from "../lib/getPathToFile.js";


const pathToWorker =  getPathToFile( import.meta.url, 'worker.js');

const performCalculations = async () => {
  const START_NUMBER = 10;
  const countCores = cpus();

  const promises = countCores.map((core, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(pathToWorker, { workerData: index + START_NUMBER });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
  });

  const result = await Promise.all(promises);
  console.log(result);
};

await performCalculations();
