import CreateApp from "./comps/CreateApp.js";

export const BASE_URL = 'http://localhost:5555/posts';
export const CURRENT_USER_ID = 3;

export const renderApp = () => {
  let root = document.getElementById("app");
  root.innerHTML = "";
  root.appendChild(CreateApp(appState.listItems));
}

const appState = {
  listItems: [],
};

export const appModifyMethods = {
  appendAppStateList: (elem) => {
    appState.listItems.push(elem);
  },

  deleteElemFromAppState: (id) => {
    appState.listItems = appState.listItems.filter((elem) => {
      return !(elem.id === id);
    });
  },

  updateElemFromAppState: (newElem) => {
    const changeIdx = appState.listItems.findIndex((elem) => elem.id === newElem.id);
    appState.listItems[changeIdx] = newElem;
  },
}


const app = () => {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => appState.listItems = json)
    .then(() => renderApp())
};

app();
