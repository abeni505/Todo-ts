let addToDoButton: HTMLElement | null = document.getElementById("addToDo");
let toDoContainer: HTMLElement | null =
  document.getElementById("toDoContainer");
let inputField = <HTMLInputElement>document.getElementById("inputField");

addToDoButton?.addEventListener("click", function () {
  let paragraph = document.createElement("p");

  let taskText = document.createElement("span");
  taskText.innerText = inputField.value;
  paragraph.appendChild(taskText);

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("edit-button");
  paragraph.appendChild(editButton);

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("remove-button");
  paragraph.appendChild(removeButton);

  toDoContainer?.appendChild(paragraph);
  inputField.value = "";

  taskText.addEventListener("click", function () {
    taskText.style.textDecoration = "line-through";
  });

  editButton.addEventListener("click", function () {
    let input = document.createElement("input");
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
    toDoContainer?.removeChild(paragraph);
  });
});
