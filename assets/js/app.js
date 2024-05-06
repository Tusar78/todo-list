const getId = (elem) => {
  return document.getElementById(elem);
};

const inputField = getId("input-field");
const taskList = getId("task-list");
const addTodo = getId("addTodo");

// console.log(inputField, taskList)
const getD = localStorage.getItem("todo");

const data = getD ? JSON.parse(getD) : [];

addTodo.addEventListener("click", (e) => {
    let mydata = { name: inputField.value };
    data.push(mydata);
    console.log(data);
    localStorage.setItem("todo", JSON.stringify(data));
    let p = document.createElement("p");
    p.innerText = inputField.value;
    taskList.append(p);
});


data.forEach((e) => {
    let p = document.createElement("p");
    p.innerText = e.name;
    taskList.append(p);
});
