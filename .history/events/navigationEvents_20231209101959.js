import { signOut } from '../utils/auth';
import { getVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('#title')
    .addEventListener('click', () => {
    getVocabulary(user.uid).then(showVocabulary);
  });
};
export default navigationEvents;
