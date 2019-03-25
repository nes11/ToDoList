const createTodoList = require('./lib/todolist')
const todoList1 = createTodoList();

const createMarkCompleteButtonId = (task) => `markComplete_button_${task}`;
const createDeleteButtonId = (task) => `Delete_task${task}`;

const createIncompleteListItem = (task) => `<div>${task}<button id='${createMarkCompleteButtonId(task)}'>Task completed</button></div>`;
const createCompleteListItem = (task) => `<div>${task}<button id='${createDeleteButtonId(task)}'>Delete task</button></div>`;

const incompleteListToHtmlString = (list) => list.map(createIncompleteListItem).join('');
const completeListToHtmlString = (list) => list.map(createCompleteListItem).join('');

const setupMarkCompleteButtons = (list) => {
  list.forEach(task => {
    const buttonId = createMarkCompleteButtonId(task);
    const markCompleteButtonElement = document.getElementById(buttonId);
    markCompleteButtonElement.addEventListener('click', () => {
      todoList1.markComplete(task);
      displayIncompleteList();
      displayCompleteList();
    });
  });
};

const setupDeleteButtons = (list) => {
  list.forEach(task => {
    const deleteButtonElement = document.getElementById(createDeleteButtonId(task));
    deleteButtonElement.addEventListener('click', () => {
      todoList1.delete(task);
      console.log(todoList1.listAll());
      displayCompleteList();
    });
  });
};

const displayIncompleteList = () => {
  const list = todoList1.listIncomplete();
  const listAsHtmlString = incompleteListToHtmlString(list);
  document.getElementById("showListToDo").innerHTML = listAsHtmlString;
  setupMarkCompleteButtons(list);
};

const displayCompleteList = () => {
  const list = todoList1.listComplete();
  const listAsHtmlString = completeListToHtmlString(list);
  document.getElementById("showListDone").innerHTML = listAsHtmlString;
  setupDeleteButtons(list);
};

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener('click', () => {
  const nameOfTask = document.getElementById("taskInput").value;
  todoList1.add(nameOfTask);
  displayIncompleteList();
});
