import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';

const formEvents = (user) => {

  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Submit Vocabulary
    if (e.target.id.includes('submit-vocabulary')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#vocabulary-language').value,
        uid: user.uid,
        created_at: new Date().toISOString()
      };
      // console.warn(payload);
      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabulary(patchPayload).then(() => {
          getVocabulary(user.uid).then(showVocabulary);
        });
      });
    }
    // Update Vocabulary
    if (e.target.id.includes('update-vocabulary')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#vocabulary-language').value,
        firebaseKey,
      };
      updateVocabulary(payload).then(() => {
        getVocabulary(user.uid).then(showVocabulary);
      });
    }
  });
};

export default formEvents;
