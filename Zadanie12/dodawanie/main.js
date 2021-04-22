const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const number = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    number.textContent = listItems.length;
    generateArray();
}

const generateArray = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, index) => {
        toDoElement.dataset.key = index;
        ul.appendChild(toDoElement);
    })
}

const addTasks = (e) => {
    e.preventDefault(); // zapobiega przeładowaniu strony
    
    const titleTask = input.value;
    if(titleTask === ''){
        return;
    }
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = titleTask + ' <button> Usuń </button>';
    
    toDoList.push(newTask);

    generateArray();
    // ul.textContent = '';
    // toDoList.forEach((toDoElement, index) => {
    //     toDoElement.dataset.key = index;
    //     ul.appendChild(toDoElement);
    // })

    // ul.appendChild(newTask);
    input.value = '';
    number.textContent = listItems.length;
    newTask.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTasks);