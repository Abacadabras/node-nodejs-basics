import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';


const performCalculations = async () => {
  const pathToWorker =  new URL('./worker.js', import.meta.url);
  const countCores = cpus();
  const resultCalc = [];
  const startNumber = 10;
  const promises = [];

  countCores.forEach((core, ind) => {
    promises.push(new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, {workerData: ind + startNumber});
        worker.on('message', resolve);
        worker.on('error', reject);
      }).then((result) => {
      resultCalc[ind] = {
          status: 'resolved',
          data: result
        }
      }).catch(() => {
      resultCalc[ind] = {
          status: 'error',
          data: null
        }
      })
    )
  });

  await Promise.allSettled(promises).then(() => console.log(resultCalc));
};

await performCalculations();
