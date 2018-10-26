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
