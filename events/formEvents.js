import { createVocabulary, getVocabulary, updateVocabulary } from "../api/vocabularyData";
import { showVocabulary } from "../pages/vocabulary";

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-author')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language-tech').value,
        uid: user.uid
      };

      console.log(payload);

      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabulary(patchPayload).then(() => {
          getVocabulary(user.uid).then(showVocabulary);
        });
      });
    }
    if (e.target.id.includes('update-vocabulary')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language-tech').value,
        firebaseKey,
      };
    
      updateVocabulary(payload).then(() => {
        getVocabulary().then(showVocabulary);
      });
    }
    
  });
}

export { formEvents };