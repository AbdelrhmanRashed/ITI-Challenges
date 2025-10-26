var addForm = document.querySelector("form");
var taskInp = document.querySelector("#taskInp");
var todotTasks = document.querySelector("#todoTasks");

var tasks = [];

if (JSON.parse(localStorage.getItem("tasks"))) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

//display tasks in to-do-app
function displayTasks(tasksArr) {
  var taskContainer = tasksArr
    .map(function (task, index) {
      return `<div class="task" data-id="${task.id}">
                <p class="task-text ${
                  task.completed ? "completed" : ""
                }">Task ${index + 1}: ${task.name}</p>
                <button class="delete-btn">🗑️Delete</button>
             </div>`;
    })
    .join("");
  todotTasks.innerHTML = taskContainer;
}

//save tasks data into local storage
function saveTasksData(tasksArr) {
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

//delete task logic
function deleteTask(taskID) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskID;
  });
  saveTasksData(tasks);
}

//Add new task
addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (taskInp.value.trim() !== "") {
    var taskObj = {
      id: crypto.randomUUID(),
      name: taskInp.value,
      completed: false,
    };

    tasks.push(taskObj);
    saveTasksData(tasks);
    displayTasks(tasks);
    taskInp.value = "";
  } else {
    alert("Please Add Your Task !");
  }
});

//handle task (delete and complete)
todotTasks.addEventListener("click", function (e) {
  var taskDiv = e.target.closest(".task");
  var taskID = taskDiv.dataset.id;

  console.log(taskDiv);
  console.log(taskID);
  if (e.target.classList.contains("delete-btn")) {
    deleteTask(taskID);
    displayTasks(tasks);
  }

  if (e.target.classList.contains("task-text")) {
    tasks = tasks.map(function (task) {
      if (task.id === taskID) {
        task.completed = !task.completed;
      }
      return task;
    });

    saveTasksData(tasks);
    displayTasks(tasks);
  }
});

//display tasks after page loaded
displayTasks(tasks);
