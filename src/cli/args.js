const parseArgs = () => {
  process.argv.forEach((el, i) => {
    if (el.includes('--')) process.stdout.write(`${el.slice(2)} is ${process.argv[i+1]}, `);
  });
};

parseArgs();
