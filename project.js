const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addTodoBtn");
const todoList = document.querySelector(".ToDoList");


let userTasks = [];


function updateList() {
    todoList.innerHTML = "";

    userTasks.forEach((task, index) => {
        const todoItemDiv = document.createElement("div");
        todoItemDiv.classList.add("toDoItem");

        const todoHeading = document.createElement("p");
        todoHeading.textContent = task.todo;

        const todoBtn = document.createElement("button");
        todoBtn.textContent = task.status;
        todoBtn.style.cursor = "pointer";
        todoBtn.addEventListener("click", () => {
            userTasks[index].status = task.status === "pending" ? "completed" : "pending";
            updateList();
        });

        const todoTrash = document.createElement("i");
        todoTrash.classList.add("fas", "fa-trash-alt");
        todoTrash.style.cursor = "pointer";
        todoTrash.addEventListener("click", () => {
            userTasks.splice(index, 1);
            updateList();
        });

        todoItemDiv.appendChild(todoHeading);
        todoItemDiv.appendChild(todoBtn);
        todoItemDiv.appendChild(todoTrash);

        todoList.appendChild(todoItemDiv);
    });
}

addBtn.addEventListener("click", () => {
    const todoUserInput = inputField.value.trim();
    if (todoUserInput === "") {
        alert("Please enter a todo.");
    } else {
        const userTodo = {
            todo: todoUserInput,
            status: "pending"
        };
        userTasks.push(userTodo);
        updateList();
        inputField.value = "";
    }
});

updateList();