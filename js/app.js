const submitButton = document.querySelector('#submit-button')
const input = document.querySelector('#list')
const listBank = document.querySelector('#todo-list')



submitButton.addEventListener('click', function(event) {
  const newToDo = document.createElement('li')
  newToDo.textContent = input.value
})