const PREFIX = '--';

const parseArgs = () => {
  const argsParts = process.argv.slice(2).reduce((acc, value, ind, arr) => {
    if (value.startsWith(PREFIX)) {
      const formattedStr = `${value.slice(2)} is ${arr[ind+1]}`;
      return [...acc, formattedStr];
    }
    return acc;
  }, []);

  console.log(argsParts.join(', '));
};

parseArgs();
