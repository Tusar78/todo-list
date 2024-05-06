const getId = (elem) => {
  return document.getElementById(elem);
};

const inputField = getId("input-field");
const taskList = getId("task-list");
const addTodo = getId("addTodo");

// console.log(inputField, taskList)
const getD = localStorage.getItem("todo");
console.log(getD);

const data = getD ? JSON.parse(getD) : [];
console.log(data);

addTodo.addEventListener("click", (e) => {
    let mydata = { name: inputField.value };
    data.push(mydata);
    console.log(data);
    localStorage.setItem("todo", JSON.stringify(data));
    let p = document.createElement("p");
    p.innerText = e.target.value;
    taskList.append(p);
});

// const getD = JSON.parse(localStorage.getItem("todo"));
// getD.forEach((e) => {
//   console.log(e.name);
// });
