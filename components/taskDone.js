const BtnDone = () => {
  const btnDone = document.createElement('button')

  btnDone.classList.add('btn-task-done')
  btnDone.innerText = 'Done'
  btnDone.addEventListener('click', doneTask)

  return btnDone
}

const doneTask = (event) => {
  const btnDone = event.target

  const btnsDiv = btnDone.parentElement
  const listDiv = btnsDiv.parentElement

  listDiv.classList.toggle('done')
}

export default BtnDone
