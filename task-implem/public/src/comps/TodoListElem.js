import { updateDoneState, updatePost, deletePost } from "./services.js";

const TodoListElem = (title, body, id, state) => {
  let listElemContainer = document.createElement('div');
  listElemContainer.className = 'row pb-4';

  let listElemInfoContainer = document.createElement('div');
  listElemInfoContainer.className = 'card p-3 col';

  let listElemHeaderText = document.createElement('h4');
  listElemHeaderText.className = 'card-title';
  listElemHeaderText.innerText = title;
  if (state) { listElemHeaderText.className += ' lineThroughStyle'; }

  let listElemBodyText = document.createElement('p');
  listElemBodyText.className = 'card-text';
  listElemBodyText.innerText = body;
  if (state) { listElemBodyText.className += ' lineThroughStyle'; }

  let actionsContainer = document.createElement('div');

  let deleteElemButton = document.createElement('button');
  deleteElemButton.className = 'btn btn-danger';
  deleteElemButton.innerText = 'Удалить';
  deleteElemButton.onclick = () => { deletePost(id); }

  let checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'form-check mt-3';

  let checkboxLabel = document.createElement('label');
  checkboxLabel.className = 'form-check-label';
  checkboxLabel.innerText = 'Выполнено?';

  let isDoneCheckbox = document.createElement('input');
  isDoneCheckbox.className = 'form-check-input';
  isDoneCheckbox.checked = state;
  isDoneCheckbox.type = 'checkbox';
  isDoneCheckbox.onchange = (e) => {
    updateDoneState(e.path[0].checked, title, body, id);
  }

  checkboxContainer.appendChild(checkboxLabel);
  checkboxContainer.appendChild(isDoneCheckbox);

  actionsContainer.appendChild(deleteElemButton);
  actionsContainer.appendChild(checkboxContainer);

  listElemInfoContainer.appendChild(listElemHeaderText);
  listElemInfoContainer.appendChild(listElemBodyText);
  listElemInfoContainer.appendChild(actionsContainer);

  let titleCurrentState = title, bodyCurrentState = body;

  let editFormContainer = document.createElement('div');
  editFormContainer.className = 'col-sm-5';

  let listElemEditForm = document.createElement('form');
  listElemEditForm.className = 'card p-3';

  let titleEditInput = document.createElement('input');
  titleEditInput.className = 'form-control mb-3';
  titleEditInput.name = 'taskText';
  titleEditInput.type = 'text';
  titleEditInput.placeholder = 'Название';
  titleEditInput.value = titleCurrentState;
  titleEditInput.oninput = (e) => {
    titleCurrentState = e.path[0].value;
  };

  let bodyEditInput = document.createElement('textarea');
  bodyEditInput.className = 'form-control mb-3';
  bodyEditInput.name = 'taskText';
  bodyEditInput.placeholder = 'Описание';
  bodyEditInput.rows = 4;
  bodyEditInput.value = bodyCurrentState;
  bodyEditInput.oninput = (e) => {
    bodyCurrentState = e.path[0].value;
  };

  let submitEditButton = document.createElement('button');
  submitEditButton.className = 'btn btn-primary';
  submitEditButton.innerText = 'Изменить';
  submitEditButton.type = 'button';
  submitEditButton.onclick = () => {
    updatePost(titleCurrentState, bodyCurrentState, id);
  };

  listElemEditForm.appendChild(titleEditInput);
  listElemEditForm.appendChild(bodyEditInput);
  listElemEditForm.appendChild(submitEditButton);

  editFormContainer.appendChild(listElemEditForm);

  listElemContainer.appendChild(listElemInfoContainer);
  listElemContainer.appendChild(editFormContainer);

  return listElemContainer;
};

export default TodoListElem;
