// import endpoint from '../utils/client';

const getVocabulary = (uid) => new Promise((resolve, reject) => {
  fetch(`https://vocab-you-lary-f2729-default-rtdb.firebaseio.com/vocabulary.json?uid=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
const createVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch('https://vocab-you-lary-f2729-default-rtdb.firebaseio.com/vocabulary.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const updateVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`https://vocab-you-lary-f2729-default-rtdb.firebaseio.com/vocabulary/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const deleteVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`https://vocab-you-lary-f2729-default-rtdb.firebaseio.com/vocabulary/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`https://vocab-you-lary-f2729-default-rtdb.firebaseio.com/vocabulary/books/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
      resolve(data);
    } else {
      reject(new Error(`No word found with firebaseKey: ${firebaseKey}`));
    }
  })
  .catch(reject);
});
const filterByHtml = () => new Promise((resolve, reject) => {
  fetch('https://vocab-you-lary-f2729-default-rtdb.firebaseio.com//vocabulary.json?orderBy="language"&equalTo="HTML"', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredHtml = Object.values(data).filter((item) => item.language);
      resolve(filteredHtml);
    })
    .catch(reject);
});
const filterByCss = () => new Promise((resolve, reject) => {
  fetch('https://vocab-you-lary-f2729-default-rtdb.firebaseio.com//vocabulary.json?orderBy="language"&equalTo="CSS"', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredCss = Object.values(data).filter((item) => item.language);
      resolve(filteredCss);
    })
    .catch(reject);
});
const filterByJavaScript = () => new Promise((resolve, reject) => {
  fetch('https://vocab-you-lary-f2729-default-rtdb.firebaseio.com//vocabulary.json?orderBy="language"&equalTo="JavaScript"', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredJS = Object.values(data).filter((item) => item.language);
      resolve(filteredJS);
    })
    .catch(reject);
});
export {
  getVocabulary, createVocabulary, updateVocabulary, deleteVocabulary, getSingleWord, filterByCss, filterByHtml, filterByJavaScript
};
