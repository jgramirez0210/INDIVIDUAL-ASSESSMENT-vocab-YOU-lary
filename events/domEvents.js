// import addVocabForm from '../components/Forms/addVocabularyForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocab')) {
      console.warn('click edit item', e.target.id);
    }
    if (e.target.id.includes('delete-vocab')) {
      console.warn('click delete item', e.target.id);
    }
    if (e.target.id.includes('create-new-entry')) {
      console.warn('click create new entry', e.target.id);
    }
  });
};
export default domEvents;
