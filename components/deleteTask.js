const BtnDelete = () => {
  const btnDelete = document.createElement('button')

  btnDelete.classList.add('btn-delete')
  btnDelete.innerText = 'Delete'
  btnDelete.addEventListener('click', deleteTask)

  return btnDelete
}

const deleteTask = (event) => {
  const btnDelete = event.target

  const taskChecked = btnDelete.parentElement
  const listDiv = taskChecked.parentElement

  listDiv.remove()

  return btnDelete
}

export default BtnDelete
