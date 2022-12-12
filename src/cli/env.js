const parseEnv = () => {
  Object.keys(process.env).forEach((el) => {
    if (el.includes('RSS_')) process.stdout.write(`${el}=${process.env[el]}; `);
  });
};

parseEnv();
