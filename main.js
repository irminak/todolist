const toDoList = [];


const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const pNumber = document.querySelector('.number p');
const divNumber = document.querySelector('div.number');

const liElements = document.getElementsByClassName('task');

const label = '<label> <input type="checkbox" /> <span class="checkbox"> </span> </label>';

const deleteBtn = '<button><img width="16" height="16" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/></button>';

const numberNotification = () => {
    let number = liElements.length;
    //    pNumber.textContent = number;
    if (number == 0) {
        pNumber.textContent = '';
        divNumber.style.backgroundColor = '';
    } else if (number == 1) {
        divNumber.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        pNumber.textContent = 'There is only one thing to do today';
    } else if (1 < number && number < 4) {
        divNumber.style.backgroundColor = 'rgba(255, 242, 0, 0.2)';
        pNumber.textContent = `There are ${number} things to do today`;
    } else {
        divNumber.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        pNumber.textContent = `You are quite busy today. There are ${number} things to do!`;
    }
};

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    createList();
    numberNotification();
};



const addElement = (e) => {
    e.preventDefault();
    const newTask = input.value;
    if (newTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${label}<span class="taskcss">${newTask}</span>${deleteBtn}`;
    // console.log(task.innerHTML);

    toDoList.push(task);

    createList();

    numberNotification();

    input.value = '';

    task.querySelector('button').addEventListener('click', removeTask);



};



const createList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, index) => {
        toDoElement.dataset.key = index;
        ul.appendChild(toDoElement);
    });

};



form.addEventListener('submit', addElement);
