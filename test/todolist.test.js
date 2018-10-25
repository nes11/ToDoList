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

const expect = require('expect.js');
const createTodoList = require('../lib/todolist')

describe('createTodoList creates a todolist', () => {
  const myTodoList = createTodoList();

  it('it gives an object', () => {
    expect(myTodoList).to.be.an('object');
  });

  it('it has add property', () => {
    expect(myTodoList).to.have.property('add');
  });

  it('it has listComplete property', () => {
    expect(myTodoList).to.have.property('listComplete');
  });

  it('it has delete property', () => {
    expect(myTodoList).to.have.property('delete');
  });

  it('it has listIncomplete property', () => {
    expect(myTodoList).to.have.property('listIncomplete');
  });

  it('it has markComplete property', () => {
    expect(myTodoList).to.have.property('markComplete');
  });

  it('it has listAll property', () => {
    expect(myTodoList).to.have.property('listAll');
  });
});

describe('todolist.add()', () => {
  it('should add an item to the list', () => {
    const myTodoList = createTodoList();
    const wholeListBefore = myTodoList.listAll();
    expect(wholeListBefore).to.be.an('array');
    expect(wholeListBefore).to.have.length(0);

    myTodoList.add('thing1');

    const wholeListAfter = myTodoList.listAll();
    expect(wholeListAfter).to.be.an('array');
    expect(wholeListAfter).to.have.length(1);
    expect(wholeListAfter).to.contain('thing1');
  });
});

describe('todoList.delete()', () => {
  it('should delete an item from the list', () => {
    const myTodoList = createTodoList();
    myTodoList.add('thing1');
    const listBefore = myTodoList.listAll();
    expect(listBefore).to.be.an('array');
    expect(listBefore).to.have.length(1);
    expect(listBefore).to.contain('thing1');

    myTodoList.delete('thing1');

    const listAfter = myTodoList.listAll();
    expect(listAfter).to.be.an('array');
    expect(listAfter).to.have.length(0);
  });
});

describe('todoList.markComplete()', () => {
  it('should move item to listComplete', () => {
    const myTodoList = createTodoList();
    myTodoList.add('thing1');
    const listBefore = myTodoList.listIncomplete();
    expect(listBefore).to.be.an('array');
    expect(listBefore).to.have.length(1);
    expect(listBefore).to.contain('thing1');

    myTodoList.markComplete('thing1');

    const listAfter = myTodoList.listComplete();
    expect(listAfter).to.be.an('array');
    expect(listAfter).to.have.length(1);
    expect(listAfter).to.contain('thing1')
    });
});

describe('todoList.listIncomplete()',() =>{
  it('should give an array of incomplete items', () => {
    const myTodoList = createTodoList();
    myTodoList.add('thing1');
    myTodoList.add('thing2');

    const listBefore = myTodoList.listIncomplete();

    expect(listBefore).to.have.length(2);
    expect(listBefore).to.contain('thing1','thing2');

    myTodoList.markComplete('thing2');

    const listToDo = myTodoList.listIncomplete();

    expect(listToDo).to.be.an('array');
    expect(listToDo).to.have.length(1);
    expect(listToDo).to.contain('thing1');

  });
});

describe('todoList.listComplete()', () => {
  it('should give an array of complete items', () => {
    const myTodoList = createTodoList();
    myTodoList.add('thing1');
    myTodoList.add('thing2');
    myTodoList.markComplete('thing1');

    const listDone = myTodoList.listComplete();

    expect(listDone).to.be.an('array');
    expect(listDone).to.have.length(1);
    expect(listDone).to.contain('thing1');
  });
});

describe('todoList.listAll()', () => {
  it('should list all items', () => {
    const myTodoList = createTodoList();
    myTodoList.add('thing1');
    myTodoList.add('thing2');
    myTodoList.markComplete('thing1');

    const wholeList = myTodoList.listAll();

    expect(wholeList).to.have.length(2);
    expect(wholeList).to.contain('thing1', 'thing2');
  });
});
