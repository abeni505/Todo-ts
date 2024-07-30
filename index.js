var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');
addToDoButton === null || addToDoButton === void 0 ? void 0 : addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer === null || toDoContainer === void 0 ? void 0 : toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function () {
        toDoContainer === null || toDoContainer === void 0 ? void 0 : toDoContainer.removeChild(paragraph);
    });
});
