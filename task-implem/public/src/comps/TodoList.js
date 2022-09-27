import TodoListElem from "./TodoListElem.js";

const TodoList = (elems) => {
  let listRootDiv = document.createElement('div');
  listRootDiv.className = 'container px-4';

  elems = elems.map((elem) => {
    return TodoListElem(elem.title, elem.body, elem.id, elem.state);
  });

  elems.forEach((elem) => {
    listRootDiv.appendChild(elem);
  });

  return listRootDiv;
};

export default TodoList;
