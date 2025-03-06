const todoList = [{
  name: 'make dinner', 
  dueDate: '21-06-24'
}, {
  name: 'wash dishes',
  dueDate: '21-06-24'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject; // destructuring
      const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
      todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => { // every time we loop through the list for each will give us 2 parameters: the value (a delete button element), the 2nd is the index
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  }); // query selector will only get the first delete button
  // As soon as the for each loop is ended, the value in the index parameter is deleted. But the value in index is saved inside the for each loop, this is called closure: if a function has access to a value, it will always have access to that value, the value (like index) gets packaged together/enclosed with the function. The value gets deleted after the loop but the function will always have access to the value.
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name, // these 2 lines will do the same as the 2 above
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
} 