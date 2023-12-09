import { signOut } from '../utils/auth';

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
};
export default navigationEvents;
