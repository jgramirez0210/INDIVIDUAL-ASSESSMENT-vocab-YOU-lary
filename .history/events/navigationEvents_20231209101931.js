import { signOut } from '../utils/auth';
import { getVocabulary } from '../api/vocabularyData';
import sh

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('#title')
  .addEventListener('click', () => {
    getVocabulary(user.uid).then(showVocabulary);
  });
};
export default navigationEvents;
