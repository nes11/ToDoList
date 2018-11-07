const createTodoList = require('./lib/todolist')
const todoList1 = createTodoList();

const createMarkCompleteButtonId = (task) => `markComplete_button_${task}`;

const createIncompleteListItem = (task) => `<div>${task}<button id='${createMarkCompleteButtonId(task)}'>Mark Complete</button></div>`;

const incompleteListToHtmlString = (list) => list.map(createIncompleteListItem).join('');
const completeListToHtmlString = (list) => list.map((task) => `<div>${task}</div>`).join('');

const setupMarkCompleteButtons = (list) => {
  // what are you doing with this variable addEventListenerToButtons, what is it?
  list.forEach(task => {
    const markCompleteButtonElement = document.getElementById(createMarkCompleteButtonId(task));
    markCompleteButtonElement.addEventListener('click', () => {
      todoList1.markComplete(task);
      console.log('blah');
      displayIncompleteList();
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
