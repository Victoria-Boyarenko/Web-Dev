const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
    input.value = "";
}


button.addEventListener("click", addTask);


form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});