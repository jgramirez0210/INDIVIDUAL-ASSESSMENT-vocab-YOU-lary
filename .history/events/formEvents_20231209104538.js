import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', async (e) => {
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

      const { name } = await createVocabulary(payload);
      const patchPayload = { firebaseKey: name };
      await updateVocabulary(patchPayload);
      await getVocabulary(user.uid).then(showVocabulary);
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

      await updateVocabulary(payload);
      await getVocabulary(user.uid).then(showVocabulary);
    }
  });
  };

export default formEvents;
