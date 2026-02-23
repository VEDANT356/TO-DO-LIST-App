const form = document.querySelector("form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if(text === "") return;

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    newTodo.innerHTML = `
        <input type="checkbox">
        <label class="todo-text">${text}</label>
        <button class="delete-button">Delete</button>
    `;

    todoList.appendChild(newTodo);

    input.value = "";
});