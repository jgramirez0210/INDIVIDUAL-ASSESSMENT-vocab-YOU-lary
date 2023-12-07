import { deleteVocabulary, getVocabulary } from '../api/vocabularyData';
import addVocabForm from '../components/Forms/addVocabularyForm';
import { showVocabulary } from '../pages/vocabulary';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'add-vocabulary-btn') {
      e.preventDefault();
      addVocabForm();
    }
    if (e.target.id.includes('delete-vocabulary')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabulary(firebaseKey).then(() => {
          getVocabulary().then(showVocabulary);
        });
      }
    }
  });
};
export default domEvents;
