import BtnDone from './components/taskDone.js'
import BtnDelete from './components/deleteTask.js'

const createTask = (event) => {
  event.preventDefault()

  const list = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const inputValue = input.value

  const task = document.createElement('li')
  task.classList.add('task')
  const taskContent = `<p class="task-content">${inputValue}</p>`

  task.innerHTML = taskContent

  const btns = document.createElement('div')

  list.appendChild(task)
  task.appendChild(btns)
  btns.appendChild(BtnDone())
  btns.appendChild(BtnDelete())
  input.value = ' '
}

const insertTask = document.querySelector('[data-form-btn]')

insertTask.addEventListener('click', createTask)
