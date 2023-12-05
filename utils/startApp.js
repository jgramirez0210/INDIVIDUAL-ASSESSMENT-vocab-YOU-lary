import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navBar';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar(user);
  domEvents(user);
};

export default startApp;
