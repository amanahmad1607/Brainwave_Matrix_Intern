function addTask() {
  const timeInput = document.getElementById("time");
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");

  const time = timeInput.value;
  const task = taskInput.value;

  if (!time || !task) {
    alert("Please enter both time and task.");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.textContent = `${time} - ${task}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskItem.remove();

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  timeInput.value = "";
  taskInput.value = "";
}

function clearAll() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}
