//Baza zadań
const baseOfTasks = ['Umyć zęby', 'Odrobić lekcje', 'Poukładać puzzle'];
let filteredTasks = baseOfTasks;
// Usuwanie zadań

const deleteTask = e => {
  e.preventDefault()
  const indexKiiToDelete = e.target.dataset.kii;
  baseOfTasks.splice(indexKiiToDelete, 1);
  printTasks()
};

//Wyświetlanie zadań
const ul = document.querySelector('ul');

const printTasks = () => {
  ul.textContent = "";
  let numberOfTask = 0;
  baseOfTasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Usuń";
    btnDelete.dataset.kii = numberOfTask;
    li.dataset.kii = numberOfTask;
    numberOfTask++;
    li.appendChild(btnDelete)
    ul.appendChild(li)
    // nasłuchiwanie na usuń
    document.querySelectorAll('button[data-kii]').forEach(btn => btn.addEventListener('click', deleteTask))
  });
}

printTasks()

//Dodawanie zadań

const inputAdd = document.querySelector('input.addTask');
const form = document.querySelector('form');

const addTask = e => {
  e.preventDefault()
  const newTaskToAdd = inputAdd.value;
  baseOfTasks.push(newTaskToAdd)
  printTasks();
  inputAdd.value = "";
}

form.addEventListener('submit', addTask)





//Filtrowanie zadań

const printFilteredTasks = () => {
  ul.textContent = "";
  let numberOfTask = 0;
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Usuń";
    btnDelete.dataset.kii = numberOfTask;
    li.dataset.kii = numberOfTask;
    numberOfTask++;
    li.appendChild(btnDelete)
    ul.appendChild(li)
    // nasłuchiwanie na usuń
    document.querySelectorAll('button[data-kii]').forEach(btn => btn.addEventListener('click', deleteTask))
  });
}

const inputFilter = document.querySelector('input.filter')
const filterTasks = () => {
  const searchPhrase = inputFilter.value.toLowerCase();
  searchPhrase ? printTasks() : null
  filteredTasks = baseOfTasks.filter(task => task.toLowerCase().includes(searchPhrase));
  printFilteredTasks()

}
inputFilter.addEventListener('input', filterTasks)

