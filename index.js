//pobranie inputu filtrowania
const inputFilter = document.querySelector('input.filter')

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
  baseOfTasks = newBaseOfTasks;
  inputFilter.value = "";
  printTasks()
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
    li.classList.add(task.id)
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
  inputFilter.value = "";
}
form.addEventListener('submit', addTask);

//filtrowanie zadań


inputFilter.addEventListener('input', () => {
  if (inputFilter.value === "") {
    document.querySelectorAll('ul>li').forEach(task => {
      task.classList.remove('hideFilter')
    })
  } else {

    document.querySelectorAll('ul>li').forEach(task => {
      if (!task.textContent.toLowerCase().includes(inputFilter.value)) {
        task.classList.add('hideFilter')
      } else {
        task.classList.remove('hideFilter')
      }

    })
  }
  // console.log(document.querySelector('input.filter').value);

})
