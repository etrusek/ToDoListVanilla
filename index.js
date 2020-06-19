//Baza zadań
let baseOfTasks = [
  { id: 0, text: 'Umyć zęby' },
  { id: 1, text: 'Odrobić lekcje' },
  { id: 2, text: 'Poukładać puzzle' },
  { id: 3, text: "Kolejne zadanie" },
  { id: 4, text: 'jeszcze jedno zadanie' }];
let filteredTasks;

//Usuwanie zadań

const deleteTask = (e) => {
  const index = e.target.className
  baseOfTasks.splice(index, 1)
  const newBaseOfTasks = [];
  let id = 0;
  baseOfTasks.forEach(task => {
    newBaseOfTasks.push({ id, text: task.text });
    id++;
  })
  console.log(newBaseOfTasks)
  baseOfTasks = newBaseOfTasks;
  printTasks()

  // console.log()
}

// Wyświetlanie zadań

const printTasks = () => {
  const ul = document.querySelector('ul');
  ul.textContent = "";
  baseOfTasks.forEach(task => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.textContent = task.text;
    btn.textContent = 'Usuń';
    btn.classList.add(task.id)
    li.appendChild(btn)
    ul.appendChild(li)
    //nasłuchiwanie do usuwania zadań
    btn.addEventListener('click', deleteTask)
  })
}
printTasks()

// Dodawanie zadań


const form = document.querySelector('form');
const addTask = e => {
  e.preventDefault()
  const task = e.target[0].value;
  baseOfTasks[baseOfTasks.length] = { id: baseOfTasks.length, text: task }
  printTasks()
  e.target[0].value = "";
  console.log(document.querySelector('input.filter').value = '');
}
form.addEventListener('submit', addTask);

