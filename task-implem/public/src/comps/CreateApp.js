import TodoList from "./TodoList.js";
import CreateElemForm from "./CreateElemForm.js";

const CreateApp = (list) => {
  let appRootDiv = document.createElement('div');
  appRootDiv.className = 'container';

  appRootDiv.appendChild(CreateElemForm());
  appRootDiv.appendChild(TodoList(list));

  return appRootDiv;
};

export default CreateApp;
