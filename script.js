const main = document.querySelector(".main");
let todoList = [];

const render = () => {
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  for (const el of todoList) {
    console.log(el);
    // /if dom cheaking
    const new_ele = `<div class="todo">
    <p>${el["key"]}</p>
    <p>${el["task"]}</p>
    <button onclick="deltask(${el["key"]})">delete</button>
    <button onclick="updatetask(${el["key"]})">update</button>
  </div>`;
    const li = document.createElement("div");
    li.innerHTML = new_ele;
    main.appendChild(li);
  }
};

const addtask = () => {
  const new_task = prompt("Enter The Task:");
  todoList.push({ key: todoList.length + 1, task: new_task });
  render();
};

const updatetask = (key) => {
  const task = prompt("Enter To Change task:");
  for (const el of todoList) {
    if (el["key"] === key) {
      el["task"] = task;
    }
  }
  render();
};
const deltask = (key) => {
  todoList = todoList.filter((h) => h.key !== key);
  render();
};

render();
