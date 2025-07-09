import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log(`🚮 All contacts were successfully removed ✅`);
  } catch (error) {
    console.log(`❌-----removeAllContactsError-----❌: `, error);
  }
};

removeAllContacts();
