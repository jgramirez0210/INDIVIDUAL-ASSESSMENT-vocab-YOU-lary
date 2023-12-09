import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const noVocabulary = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};
const showVocabulary = (array) => {
  clearDom();
  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add A Vocabulary Word</button>
    <button class="btn btn-success btn-lg mb-4" id="filter-by-html">Filter By HTML</button>
    <button class="btn btn-success btn-lg mb-4" id="filter-by-css">Filter By CSS</button> 
    <button class="btn btn-success btn-lg mb-4" id="filter-by-javascript">Filter By JavaScript</button>`;

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card">
          <div class="card-body" style="height: 300px;">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.definition}</p>
            <p class="card-text">${item.language}</p>
            <p class="card-text">Created at: ${item.created_at}</p> 
              <i class="btn btn-success fas fa-eye" id="view-vocabulary-btn--${item.firebaseKey}"></i>
              <i id="edit-vocabulary-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-vocabulary-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
  });
  renderToDOM('#store', domString);
};
export { showVocabulary, noVocabulary };
