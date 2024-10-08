const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    
    li.appendChild(span);

    span.innerText = newTodo;

    todoList.appendChild(li);

    // todoList.createElement("li").innerText = newTodo;
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);