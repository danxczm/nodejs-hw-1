import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = await createFakeContact();
    await writeContacts([newContact]);
    console.log(
      `☎️ ${newContact.name}'s new contact was succesfuly added ✅: `,
    );
  } catch (error) {
    console.log(`❌---addOneContactError---❌: `, error);
  }
};

addOneContact();
