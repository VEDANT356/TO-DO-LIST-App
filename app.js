const form = document.querySelector("form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
  

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

   const id = "todo-" + Date.now();


newTodo.innerHTML = `
    <input type="checkbox" id="${id}">
    
    <label class="custom-checkbox" for="${id}">
        <svg fill="transparent" xmlns="http://www.w3.org/2000/svg"
            height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
    </label>

    <label for="${id}" class="todo-text">
        ${text}
    </label>

    <button class="delete-button">
        <svg xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Z"/>
        </svg>
    </button>
`;

    todoList.appendChild(newTodo);

    
    newTodo.querySelector(".delete-button").addEventListener("click", function() {
        newTodo.remove();
    });

    input.value = "";
});