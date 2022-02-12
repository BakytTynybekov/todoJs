

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
            <input type="checkbox" className="checkbox" />
            ${item}
          </label>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/OOjs_UI_icon_clear-destructive.svg/1200px-OOjs_UI_icon_clear-destructive.svg.png"
            alt=""
            data-id=${index}
          />
    </div>
    `
  })
  let newTodo = todoItems.join('')
  todoList.innerHTML = newTodo;
  }
}
array;
todoList.addEventListener('click', deleteItem);

function deleteItem( e) {
  let todoListItem = document.querySelectorAll('.todo-list__item');
console.log([...todoListItem])
  let blockId = e.target.parentNode.id;
  let imgId = e.target.dataset.id;
  let a = [...todoListItem].filter(item => item.id == "0")
  return a;
}



