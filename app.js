const addBtn = document.getElementById("addBtn");
const taskField = document.getElementById("taskField");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskField.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = taskField.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskField.value = "";
}
