let addToDoButton:HTMLElement|null = document.getElementById('addToDo');
let toDoContainer:HTMLElement|null = document.getElementById('toDoContainer');
let inputField = <HTMLInputElement> document.getElementById('inputField');

addToDoButton?.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    
    paragraph.innerText = inputField.value;
    toDoContainer?.appendChild(paragraph);

    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer?.removeChild(paragraph);
    })
})