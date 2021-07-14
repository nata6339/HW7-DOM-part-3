let btn = document.getElementById('add');

btn.addEventListener('click', function () {
    let text = document.getElementById('task').value;
    let newElement = document.createElement('li');
    newElement.innerText = text;
    newElement.classList.add('task-value');

    document.querySelector('ul').append(newElement);
    document.getElementById('task').value = '';

    newElement.addEventListener('click', () => {
        newElement.classList.toggle('active');
    });

    // let reset = document.createElement('button');
    // reset.textContent = 'remove'
    // reset.classList.add('task-btn')
    //
    // document.querySelectorAll('.task-value').append(reset);

});