/*
const todaysToDoList = createTodoList();
todaysToDoList.add('Give Ollie a bj');
console.log(todaysToDoList.listIncomplete());



const myTodoList = createTodoList();
console.log('myToDoList', myTodoList)
myTodoList['add']('thing 1')
myTodoList.add('thing 2')
console.log('thing 1, thing 2', myTodoList.listIncomplete()) // should give thing 1, thing 2
myTodoList.markComplete('thing 1')
console.log('thing 2', myTodoList.listIncomplete()) // should give thing 2
console.log('thing 1', myTodoList.listComplete()) // should give thing 1
console.log('thing 1, thing 2', myTodoList.listAll()) // should give thing 1, thing 2
myTodoList.delete('thing 2')
console.log('thing 1', myTodoList.listAll()) // should give thing 1
*/

const createToDoList = require('../lib/todolist')
