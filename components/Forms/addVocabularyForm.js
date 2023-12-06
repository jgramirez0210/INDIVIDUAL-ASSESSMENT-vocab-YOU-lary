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
        <label for="image">Deffinition</label>
        <input type="text" class="form-control" id="deffinition" placeholder="Deffinition" required>
      </div>
      <div class="form-group">
        <label for="title">Language/Tech</label>
        <input type="text" class="language-tech" id="language-tech" aria-describedby="language" placeholder="Enter Email" required>
      </div>
      <button type="submit" id="submit-form" class="btn btn-primary mt-3">Submit </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
