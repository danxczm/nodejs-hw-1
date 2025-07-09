import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    const dataArray = JSON.parse(data);
    console.log(`📊 The amount of exsisting numbers is:`);
    return dataArray.length;
  } catch (error) {
    console.log(`❌-----countContactsError-----❌: `, error);
  }
};

console.log(await countContacts());
