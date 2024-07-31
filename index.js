var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");
addToDoButton === null || addToDoButton === void 0 ? void 0 : addToDoButton.addEventListener("click", function () {
    var paragraph = document.createElement("p");
    var taskText = document.createElement("span");
    taskText.innerText = inputField.value;
    paragraph.appendChild(taskText);
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit-button");
    paragraph.appendChild(editButton);
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove-button");
    paragraph.appendChild(removeButton);
    toDoContainer === null || toDoContainer === void 0 ? void 0 : toDoContainer.appendChild(paragraph);
    inputField.value = "";
    taskText.addEventListener("click", function () {
        taskText.style.textDecoration = "line-through";
    });
    editButton.addEventListener("click", function () {
        var input = document.createElement("input");
        input.type = "text";
        input.value = taskText.innerText;
        paragraph.insertBefore(input, taskText);
        paragraph.removeChild(taskText);
        input.focus();
        editButton.innerText = "Save";
        editButton.addEventListener("click", function saveTask() {
            taskText.innerText = input.value;
            paragraph.insertBefore(taskText, input);
            paragraph.removeChild(input);
            editButton.innerText = "Edit";
            editButton.removeEventListener("click", saveTask);
        });
    });
    removeButton.addEventListener("click", function () {
        toDoContainer === null || toDoContainer === void 0 ? void 0 : toDoContainer.removeChild(paragraph);
    });
});
