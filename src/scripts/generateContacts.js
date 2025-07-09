import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const dataToAppend = [];

  for (let i = 1; i <= number; i++) {
    dataToAppend.push(createFakeContact());
  }

  try {
    await writeContacts(dataToAppend);
    console.log(
      `☎️ ${number} new contacts ${
        number < 2 ? 'was' : 'were'
      } added to your DB 💾`,
    );
  } catch (error) {
    console.log(`❌-----generateContactsError-----❌: `, error);
  }
};

generateContacts(5);
