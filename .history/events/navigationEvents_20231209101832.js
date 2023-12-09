import { signOut } from '../utils/auth';
import getVocabulary from '../path/to/getVocabulary';
import showVocabulary from '../path/to/showVocabulary';
import user from '../path/to/user';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TITLE
  document.querySelector('#title')
    .addEventListener('click', () => {
      getVocabulary(user.uid).then(showVocabulary);
    });
};

export default navigationEvents;
