import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const modifyArrayContacts = await readContacts();
    const lastContact = modifyArrayContacts.pop();
    console.log(`${lastContact.name}'s contact was succesfuly removed ✅`);
    await writeFile(PATH_DB, JSON.stringify(modifyArrayContacts, null, 2));
  } catch (error) {
    console.log(`❌---removeLastContactError---❌: `, error);
  }
};

removeLastContact();
