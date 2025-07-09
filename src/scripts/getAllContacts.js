import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    if (data.length) return `💾 DB is empty ⛔️`;
    console.log(`📝 Here is the list of all contacts:`);
    return JSON.parse(data);
  } catch (error) {
    console.log(`❌-----getAllContactsError-----❌: `, error);
  }
};

console.log(await getAllContacts());
