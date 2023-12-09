import {
  deleteVocabulary, getVocabulary, getSingleWord, filterByCss, filterByHtml, filterByJavaScript
} from '../api/vocabularyData';
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
    if (e.target.id.includes('edit-vocabulary-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
      console.warn(firebaseKey);
    }
    document.querySelector('#filter-by-css').addEventListener('click', () => {
      filterByCss().then(showVocabulary);
      console.warn('CLICKED FILTER BY CSS');
    });
    document.querySelector('#filter-by-html').addEventListener('click', () => {
      filterByHtml().then(showVocabulary);
      console.warn('CLICKED FILTER BY HTML');
    });
    document.querySelector('#filter-by-javascript').addEventListener('click', () => {
      filterByJavaScript().then(showVocabulary);
      console.warn('CLICKED FILTER BY JAVASCRIPT');
      });
   });
  };
export default domEvents;
