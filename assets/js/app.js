const getId = (elem) => {
  return document.getElementById(elem);
};

// All of References
const inputField = getId('input-filed');
const addBtn = getId('push');

const tasks = getId('tasks');


const todoList = () => {
    console.log('hello');
}
addBtn.addEventListener('click', todoList);