const submitButton = document.querySelector('button')
const input = document.querySelector('input')
const listBank = document.querySelector('ul')



submitButton.addEventListener('click', function(event) {
  const newToDo = document.createElement('li')
  newToDo.textContent = input.value
  listBank.appendChild(newToDo);
  input.value = ''
})