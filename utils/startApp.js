import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';

const startApp = (user) => {
  domBuilder();
  navBar(user);
  navigationEvents(user);
  domEvents();
  getVocabulary(user.uid).then(showVocabulary);
};
// document.addEventListener('click', (e) => {
//   console.warn(e.target.id);
// });
export default startApp;
