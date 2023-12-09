import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navBar(user);
  navigationEvents(user);
  getVocabulary(user.uid).then(showVocabulary);
  domEvents();
  formEvents(user);
};
// document.addEventListener('click', (e) => {
//   console.warn(e.target.id);
// });
export default startApp;
