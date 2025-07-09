import path from 'node:path';
const pathToDbDir = path.join(process.cwd());

export const PATH_DB = path.join(pathToDbDir, 'src/db', 'db.json');
