(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
