import { appModifyMethods, BASE_URL, CURRENT_USER_ID, renderApp } from "../app.js";

export function addListElem(title, body) {
  fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      "userId": CURRENT_USER_ID,
      "title": title,
      "body": body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
        if (response.status === 201)
          return response.json();
        else throw new Error("Ошибка добавления записи");
      }
    )
    .catch((error) => alert(error))
    .then((json) => {
      appModifyMethods.appendAppStateList(json);
      renderApp();
    });
}


export function deletePost(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status === 200) {
        appModifyMethods.deleteElemFromAppState(id);
        renderApp();
      }
      else throw Error("Ошибка удаления записи!");
    })
    .catch((error) => {alert(error.message)});
}


export function updatePost(title, body, id) {
  fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      title,
      body,
      userId: CURRENT_USER_ID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
        if (response.status === 200)
          return response.json();
        else throw new Error("Ошибка изменения записи");
      }
    )
    .catch((error) => alert(error))
    .then((json) => {
      appModifyMethods.updateElemFromAppState(json);
      renderApp();
    });
}


export function updateDoneState(state, title, body, id) {
  fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      title,
      body,
      userId: CURRENT_USER_ID,
      state,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
        if (response.status === 200)
          return response.json();
        else throw new Error("Ошибка изменения состояния записи");
      }
    )
    .catch((error) => alert(error))
    .then((json) => {
      appModifyMethods.updateElemFromAppState(json);
      renderApp();
    });
}
