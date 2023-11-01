document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    buildToDo(event.target.newtaskdescription.value);
    document.querySelector('#newtaskdescription').value = null
  });
}); 


function buildToDo(todo) {
  console.log("task",todo)
  let p = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete)
  button.textContent = "x"
  p.textContent = `${todo} `
  p.appendChild(button)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(event) {
  event.target.parentNode.remove();
}
