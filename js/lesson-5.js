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

let tasksArr = null;

const KEY_TASKS_LS = "tasks-todo-list";

const formRef = document.querySelector("#task-form");
const taskListRef = document.querySelector("#task-list");

getDataToLS();
const markup = createMarkup(tasksArr);
taskListRef.insertAdjacentHTML("beforeend", markup);

formRef.addEventListener("submit", handleSubmit);
taskListRef.addEventListener("click", onDelete);

function handleSubmit(e) {
  e.preventDefault();

  const {
    elements: { taskName },
  } = e.currentTarget;

  const isValid = validationInputValue(taskName.value);

  if (!isValid) {
    setTimeout(() => {
      alert("Enter valid value!!!");
    }, 100);

    return;
  }

  const obj = {
    task: taskName.value,
    id: Date.now().toString(),
  };

  setDataToLS(obj);
  const markup = createMarkup([obj]);

  taskListRef.insertAdjacentHTML("beforeend", markup);
}

function validationInputValue(value) {
  return value.trim().length ? true : false;
}

function createMarkup(tasks) {
  return tasks
    .map(
      ({ task, id }) => `
      <li id="${id}">
        <p>${task}</p>
        <button class="js-delete-task" type="button">Delete</button>
      </li>
    `
    )
    .join("");
}

function onDelete({ target }) {
  if (target.classList.contains("js-delete-task")) {
    const el = target.closest("li");

    el.remove();

    const idEl = el.getAttribute("id");

    tasksArr = tasksArr.filter(({ id }) => id !== idEl);

    setDataToLS();
  }
}

function setDataToLS(task) {
  if (task) {
    tasksArr.push(task);
  }

  const data = JSON.stringify(tasksArr);

  localStorage.setItem(KEY_TASKS_LS, data);
}

function getDataToLS() {
  const data = localStorage.getItem(KEY_TASKS_LS);

  tasksArr = JSON.parse(data) || [];
}
