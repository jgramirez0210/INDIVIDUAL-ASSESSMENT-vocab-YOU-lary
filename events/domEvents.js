import addVocabForm from '../components/Forms/addVocabularyForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'add-vocabulary-btn') {
      e.preventDefault();
      addVocabForm();
    }
  });
};
export default domEvents;
