/**
 * ЗАДАЧА 8
 * Створи перелік справ.
 * Є  інпут, в який вноситься зміст задачі.
 * При натисканні на кнопку "Додати" задача додається в список #list.
 * Поруч з кожною задачею знаходится кнопка "Видалити", щоб можна було
 * видалити цю задачу із списку.
 * Список з задачами має бути доступним післе перезавантаження сторінки.
 */

{
  /* <h2>Задача 8</h2>
    <form id="task-form">
      <input type="text" name="taskName" />
      <button type="submit">Додати</button>
    </form>

    <ul id="task-list"></ul> */
}

// let tasksArr = null;

// const KEY_TASKS_LS = "tasks-todo-list";

// const formRef = document.querySelector("#task-form");
// const taskListRef = document.querySelector("#task-list");

// getDataToLS();
// const markup = createMarkup(tasksArr);
// taskListRef.insertAdjacentHTML("beforeend", markup);

// formRef.addEventListener("submit", handleSubmit);
// taskListRef.addEventListener("click", onDelete);

// function handleSubmit(e) {
//   e.preventDefault();

//   const {
//     elements: { taskName },
//   } = e.currentTarget;

//   const isValid = validationInputValue(taskName.value);

//   if (!isValid) {
//     setTimeout(() => {
//       alert("Enter valid value!!!");
//     }, 100);

//     return;
//   }

//   const obj = {
//     task: taskName.value,
//     id: Date.now().toString(),
//   };

//   setDataToLS(obj);
//   const markup = createMarkup([obj]);

//   taskListRef.insertAdjacentHTML("beforeend", markup);
// }

// function validationInputValue(value) {
//   return value.trim().length ? true : false;
// }

// function createMarkup(tasks) {
//   return tasks
//     .map(
//       ({ task, id }) => `
//       <li id="${id}">
//         <p>${task}</p>
//         <button class="js-delete-task" type="button">Delete</button>
//       </li>
//     `
//     )
//     .join("");
// }

// function onDelete({ target }) {
//   if (target.classList.contains("js-delete-task")) {
//     const el = target.closest("li");

//     el.remove();

//     const idEl = el.getAttribute("id");

//     tasksArr = tasksArr.filter(({ id }) => id !== idEl);

//     setDataToLS();
//   }
// }

// function setDataToLS(task) {
//   if (task) {
//     tasksArr.push(task);
//   }

//   const data = JSON.stringify(tasksArr);

//   localStorage.setItem(KEY_TASKS_LS, data);
// }

// function getDataToLS() {
//   const data = localStorage.getItem(KEY_TASKS_LS);

//   tasksArr = JSON.parse(data) || [];
// }

// --------------------------------------------------------

// * ЗАДАЧА 1
//  * Перероби функцію на проміс таким чином, щоб проміс повертав значення
//  * через 2 секунди після виклику функції
//  */

// function greet() {
//   return "hello world";
// }

// function greet() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 2000);
//   });
// }

// greet().then(console.log);

/**
 * ЗАДАЧА 3
 *
 * Якщо ємейл і пароль користувача співпадають, під час сабміта зберігай данні з форми
 * в локальне сховище і змінюй кнопку login на logout та роби поле введення
 * недоступним для змін.
 * При перезавантаженні сторінки, якщо користувач залогінився, ми маємо бачити logout-кнопку
 * та недоступні для змін поля з данними користувача.
 * Клік по кнопці logout повертає усе в первинний стан і видаляє данні користувача
 * з локального сховища.
 *
 * Якщо введені данні не співпадають з необхідними данними, викликати аlert та
 * повідомляти про помилку.
 */

const SAVED_LOGIN_DATA = "SAVED_LOGIN_DATA";
const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const USER_DATA_KEY = "loginData";

const form = document.querySelector("#login-form");
const button = document.querySelector("button");

if (localStorage.getItem(USER_DATA_KEY)) {
  form.elements.email.value = JSON.parse(
    localStorage.getItem(USER_DATA_KEY)
  ).email;
  form.elements.email.disabled = true;
  form.elements.password.value = JSON.parse(
    localStorage.getItem(USER_DATA_KEY)
  ).password;
  form.elements.password.disabled = true;
  button.innerText = "Logout";
}

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  if (localStorage.getItem(USER_DATA_KEY)) {
    e.preventDefault();

    button.innerText = "Login";
    e.target.reset();
    form.elements.email.disabled = false;
    form.elements.password.disabled = false;
    localStorage.removeItem(USER_DATA_KEY);
  } else {
    e.preventDefault();

    if (
      e.target.elements.email.value === USER_DATA.email &&
      e.target.elements.password.value === USER_DATA.password
    ) {
      button.innerText = "Logout";
      form.elements.email.disabled = true;
      form.elements.password.disabled = true;
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(USER_DATA));
    }
  }
}
