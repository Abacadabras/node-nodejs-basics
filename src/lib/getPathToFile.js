import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


export const getPathToFile = (url, ...args) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);

  return  join(__dirname, ...args);
}
