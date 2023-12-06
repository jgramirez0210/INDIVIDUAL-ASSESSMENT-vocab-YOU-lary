import { createVocabulary, getVocabulary, updateVocabulary } from "../api/vocabularyData";
import { showVocabulary } from "../pages/vocabulary";

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-form')) {
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
  });
}

export { formEvents };