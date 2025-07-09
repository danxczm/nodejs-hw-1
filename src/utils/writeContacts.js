import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const existingContacts = await readContacts();
    const data = [...existingContacts, ...updatedContacts];

    await writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(`---writeContactsError---: `, error);
  }
};
