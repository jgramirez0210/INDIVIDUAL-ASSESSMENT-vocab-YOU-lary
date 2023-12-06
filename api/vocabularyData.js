// import endpoint from '../utils/client';

const getVocabulary = (uid) => new Promise((resolve, reject) => {
  fetch(`https://vocab-you-lary-f2729-default-rtdb.firebaseio.com/vocabulary.json?uid=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const vocabularyArray = [{
        title: data.title,
        definition: data.definition,
        language: data.language,
        firebaseKey: data.firebaseKey
      }];
      resolve(vocabularyArray);
    })
    .catch(reject);
});
export default getVocabulary;
