(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const createTodoList = require('./lib/todolist')
const todoList1 = createTodoList();

const createMarkCompleteButtonId = (task) => `markComplete_button_${task}`;

const taskNameToListItem = (task) => `<div>${task}<button id='${createMarkCompleteButtonId(task)}'>Mark Complete</button></div>`;

const listToHtmlString = (list) => list.map(taskNameToListItem).join('');

const setupMarkCompleteButtons = (list) => {
  // what are you doing with this variable addEventListenerToButtons, what is it?
  list.forEach(task => {
    const markCompleteButtonElement = document.getElementById(createMarkCompleteButtonId(task));
    markCompleteButtonElement.addEventListener('click', () => {
      todoList1.markComplete(task);
      displayIncompleteList();
    });
  });
};

const displayIncompleteList = () => {
  const list = todoList1.listIncomplete();
  const listAsHtmlString = listToHtmlString(list);
  document.getElementById("showListToDo").innerHTML = listAsHtmlString;
  setupMarkCompleteButtons(list);
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

},{"./lib/todolist":2}],2:[function(require,module,exports){
const createTodoList = () => {
  let listToDo = [];
  let listDone = [];
  const removeDoneItem = (entry) => {
    return listToDo.filter((item) => item !== entry);
  }

 return {
   add: (item) => {
     listToDo = listToDo.concat([item]);
   },
   listIncomplete: () => listToDo,
   markComplete: (entry) => {
     listDone = listDone.concat([entry]);
     listToDo = removeDoneItem(entry);
   },
   listComplete: () => listDone,
   listAll: () => listToDo.concat(listDone),
   delete: (entry) => {
     listToDo = removeDoneItem(entry);
     listDone = listDone.filter((item) => item !== entry);
   },
 };
}

module.exports = createTodoList;

},{}]},{},[1]);
