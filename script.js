const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

// Updating the counters
function updateCounters() {
  itemCountSpan.innerHTML = itemCount
  uncheckedCountSpan.innerHTML = uncheckedCount
}

// Create a New TODO
function newTodo() {
  // Prompt user for TODO name using an alert
  const task = prompt('Add new To-do')

  // Add a new TODO if user's input isn't null
  if (task.length +=0) {
    // increase the itemCount and uncheckedCount by 1
    itemCount +=1
    uncheckedCount +=1
    updateCounters()

    // Create the list item
    const todoList = document.createElement("li")
    todoList.className = classNames.TODO_ITEM
    todoList.id = itemCount
    list.appendChild(todoList)

    // Put Checkbox in TODO
    const todoCheck = document.createElement("input")
    todoCheck.className = classNames.TODO_CHECKBOX
    todoCheck.type = "checkbox"
    todoCheck.id = "myCheck" + itemCount
    todoCheck.setAttribute("onClick", "checkTodo(this.id)")
    todoList.appendChild(todoCheck)

    // Put text in the line
    const todoText = document.createTextNode(task)
    todoList.appendChild(todoText)

    // Put the delete Button in TODO
    const todoDelete = document.createElement("button")
    todoDelete.className = "todo-delete btn btn-danger btn-sa"
    todoDelete.innerHTML = "Delete"
    todoDelete.id = "myDelete"
    todoDelete.value = itemCount
    todoDelete.setAttribute("onClick", "deleteTodo(this.value)")
    todoList.appendChild(todoDelete)
  }
}

// Track Todo Checkbox and update the Counter
function checkTodo(id) {
  const checkBox = document.getElementById(id)
  if (checkBox.clicked == true || checkBox.checked == true) {
    uncheckedCount -=1
    updateCounters()
  } else if (checkBox.clicked == true || checkBox.checked == false) {
    uncheckedCount +=1
    updateCounters()
  }
}

// Delete the Todos and update the Counter
function deleteTodo(value) {
  const check = document.getElementById("myCheck" + value).checked
  const deleteButton = document.getElementById(value)
  deleteButton.parentNode.removeChild(deleteButton)
  if (check == false) {
    uncheckedCount -=1
    updateCounters()
  }

  itemCount -=1
  updateCounters()
}