class TodoList {
  constructor(){
    this.listToDo = [];
    this.listDone = [];
  }
  add(item) {
    this.listToDo = this.listToDo.concat([item]);
  }
  listIncomplete() {
    return this.listToDo;
  }
  markComplete(entry) {
    this.listDone = this.listDone.concat([entry]);
    this.listToDo = this._removeDoneItem(entry);
  }
  listComplete() {
    return this.listDone;
  }
  listAll() {
    return this.listToDo.concat(this.listDone);
  }
  delete(entry) {
    this.listToDo = this._removeDoneItem(entry);
    this.listDone = this.listDone.filter((item) => item !== entry);
  }
  _removeDoneItem(entry) {
    return this.listToDo.filter((item) => item !== entry);
  }
}

module.exports = TodoList;
