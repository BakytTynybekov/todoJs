

const todoInput = document.querySelector('input');
const addButton = document.querySelector('button');
const todoList = document.querySelector('.todo-list__inner');

const todoListItem = document.querySelectorAll('.todo-list__item');

let array = [];

addButton.addEventListener('click', addItem);

function addItem(e) {
  
  e.preventDefault();
  
  if (todoInput.value.length > 0) {
    array.push(todoInput.value)
  todoInput.value = ''
  let todoItems = array.map((item, index) => {
    return `
    <div class="todo-list__item" id=${index}>
    <label>
            <input class='checkbox' type="checkbox" />
            ${item}
          </label>
          
    </div>
    `
  })
  let newTodo = todoItems.join('')
  todoList.innerHTML = newTodo;
  }
}




