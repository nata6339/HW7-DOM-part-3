const task = [];
const list = document.getElementById('list');

document.getElementById('add').addEventListener('click', function () {
    let taskName = document.getElementById('task').value;
    task.push(taskName);
    update();
    document.getElementById('task').value = '';
});

document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('highlight');
    }
    if (event.target.tagName === 'BUTTON') {
        task.splice(event.target.id, 1);
        update();
    }
});

function update() {
    let li = '';
    let id = 0;
    task.forEach((value) => {
        li += `<li> ${value} <button id = ${id++}>remove</button> </li>`;
    })
    list.innerHTML = `<ul> ${li} </ul>`;
}


