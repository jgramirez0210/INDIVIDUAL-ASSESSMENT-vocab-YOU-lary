import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const firebaseKey = obj ? obj.firebaseKey : null;
  const domString = `
    <form id="${firebaseKey ? `update-vocabulary--${firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" required>
      </div>
      <div class="form-group">
      <select class="form-select" aria-label="Language/Tech">
  <option selected>Language/Tec</option>
  <option value="HTML">HTML</option>
  <option value="CSS">CSS</option>
  <option value="JavaScript">JavaScript</option>
</select>
      </div>
      <button type="submit" id="submit-form" class="btn btn-primary mt-3">Submit </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
