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
    const markCompleteButtonElement = document.getElementById(createMarkCompleteButtonId(task));
    markCompleteButtonElement.addEventListener('click', () => {
      todoList1.markComplete(task);
      console.log('incomplete', todoList1.listIncomplete());
      console.log('complete', todoList1.listComplete())
      displayIncompleteList();
      displayCompleteList();
    });
  });
};

const setupDeleteButtons = (list) => {
  list.forEach(task => {
    const deleteButtonElement = document.getElementById(createDeleteButtonId(task));
    console.log('deleteButtonElement', deleteButtonElement);
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


/*const addTask = document.getElementById("addTask");
addTask.addEventListener('click', () => {
  todoList1.add('task1')
  todoList1.add('task2');
  todoList1.add('task3')
  //console.log('incomplete', todoList1.listIncomplete());
  const showList = todoList1.listIncomplete();
  const showListAsDivStrings = showList.map((task) => `<div>${task}</div>`).join('');
  const showListToDo = document.getElementById("showListToDo");
  showListToDo.innerHTML = showListAsDivStrings;
});

const markComplete = document.getElementById("markComplete");
markComplete.addEventListener('click', () => {
  todoList1.markComplete('task1');
});*/

/*
const markComplete = document.getElementById(`markComplete_button_${task}`);
markComplete.addEventListener('click', () => {
  todoList1.markComplete(task);
});

const deleting = document.getElementById(`markComplete_button_${task}`);
deleting.addEventListener('click', () => {
  todoList1.delete(task);
});

const showList = document.getElementById("ShowAllIncomplete");
ShowAllIncomplete.addEventListener('click', () => {
  const showList = todoList1.listIncomplete();
  const showListAsDivStrings = showList.map((task) => `<div>${task}</div>`).join('');
  const showListToDo = document.getElementById("showListToDo");
  showListToDo.innerHTML = showListAsDivStrings;
});
*/
