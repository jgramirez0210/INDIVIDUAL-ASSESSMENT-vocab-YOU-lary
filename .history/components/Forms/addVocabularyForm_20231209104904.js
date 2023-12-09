import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  // const firebaseKey = obj ? obj.firebaseKey : null;
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocabulary--${obj.firebaseKey}` : 'submit-vocabulary'}" class="mb-4">
      <div class="form-group">
      <label for="title">Vocabulary Title</label>
      <input type="text" class="form-control" id="title" aria-described by="vocabularyTitle" placeholder="Enter a Vocabulary Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
      <label for="title">Vocabulary Definition</label>
      <input type="text" class="form-control" id="definition" aria-described by="vocabularyDefinition" placeholder="Enter a Vocabulary Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
      <label for="title">Vocabulary Language </label>
      <input type="text" class="form-control" id="vocabulary-language" aria-describedby="vocabulary-language" placeholder="Enter a Vocabulary Language" value="${obj.language || ''}" required>
      </div>  
</select>
      </div>
      <button type="submit" id="submit-form" class="btn btn-primary mt-3">Submit </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
