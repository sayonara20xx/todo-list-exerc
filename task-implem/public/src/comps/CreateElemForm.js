import { addListElem } from "./services.js";

const CreateElemForm = () => {
  let titleCurrentState = "", bodyCurrentState = "";

  let formElem = document.createElement('form');
  formElem.className = 'row card p-3 mt-3 mb-3';

  let textLabel = document.createElement('label');
  textLabel.className = 'form-label';
  textLabel.innerText = 'Введите описание задачи';
  textLabel.htmlFor = 'taskText';

  let titleInput = document.createElement('input');
  titleInput.className = 'form-control mb-3';
  titleInput.name = 'taskText';
  titleInput.type = 'text';
  titleInput.placeholder = 'Название';
  titleInput.oninput = (e) => {titleCurrentState = e.path[0].value};

  let bodyInput = document.createElement('textarea');
  bodyInput.className = 'form-control mb-3';
  bodyInput.name = 'taskText';
  bodyInput.placeholder = 'Описание';
  bodyInput.oninput = (e) => {bodyCurrentState = e.path[0].value};

  let submitButton = document.createElement('button');
  submitButton.className = 'btn btn-primary';
  submitButton.innerText = 'Добавить';
  submitButton.type = 'button';
  submitButton.onclick = () => {
    addListElem(titleCurrentState, bodyCurrentState);
  }

  formElem.appendChild(textLabel);
  formElem.appendChild(titleInput);
  formElem.appendChild(bodyInput);
  formElem.appendChild(submitButton);

  return formElem;
};

export default CreateElemForm;
