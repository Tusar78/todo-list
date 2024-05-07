const getId = (elem) => {
  return document.getElementById(elem);
};

// All of necessary references
const inputField = getId("input-field");
const addBtn = getId("push");
const taskContainer = getId("tasks");

const taskCount = document.querySelector(".task-count");
const multipleTask = document.querySelector(".multiple-task");

// Todo List Add
const todoList = () => {
  // Get Value From Input Field
  const inputFieldValue = inputField.value;

  // New Task Wrap
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <div class="task-wrap">
      <input type="checkbox" name="task-1" id="radio-check" />
      <label id="task-name">${inputFieldValue}</label>
    </div>
    <div class="updates">
      <div class="edit-wrap">
        <i class="fa-regular fa-pen-to-square"></i>
      </div>
      <div class="delete-wrap">
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  `

  const taskWrap = document.createElement("div");
  taskWrap.classList.add("task-wrap");
  taskWrap.innerHTML = `
    <input type="checkbox" name="task-1" id="radio-check" />
    <label id="task-name">${inputFieldValue}</label>
  `;

  taskContainer.append(taskItem);

  const currentTask = document.querySelectorAll('.delete-wrap');
  for (const curTask of currentTask) {
    curTask.addEventListener('click', function() {
      this.parentNode.parentNode.remove();
    })
  }
};

// Event handler for Add Btn
addBtn.addEventListener("click", todoList);

