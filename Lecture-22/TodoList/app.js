const form = document.querySelector('#form');
const list = document.querySelector('#list');

let todos = [];

function addTodo(todo) {
    todos.push(todo);
    refreshTodos(todos);
}

function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    todos = newTodos;
    refreshTodos(todos);
}

function refreshTodos(todos) {

    while (list.firstChild) { // removing all li's from ul 
        list.firstChild.remove();
    }

    for (let todo of todos) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.addEventListener('click', () => deleteTodo(todo.id));
        span.innerText = ' X';
        li.append(todo.text);
        li.append(span);
        list.append(li);
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoText = form.elements[0].value;
    if (todoText.trim().length === 0) { //checking if todo is empty
        alert('Empty Todo');
        return;
    }
    addTodo({ id: todos.length, text: todoText });
    console.log(todos);
   
    // const li = document.createElement('li');
    // li.innerText = todoText;
    // list.append(li);
    form.elements[0].value = "";
});