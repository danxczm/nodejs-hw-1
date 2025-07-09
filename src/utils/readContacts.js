import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};
