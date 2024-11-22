// botones de filtro de estado de las tareas
const allTaskButton = document.getElementById('all-tasks');
const activeTaskButton = document.getElementById('active-tasks');
const completeTaskButton = document.getElementById('complete-tasks');
const archiveTaskButton = document.getElementById('archive-tasks');

allTaskButton.addEventListener('click', () => {
  console.log("mostrando todas las tareas")
});

activeTaskButton.addEventListener('click', () => {
  console.log("mostrando todas las tareas pendientes")
});

completeTaskButton.addEventListener('click', () => {
  console.log("mostrando todas las tareas completadas")
});

archiveTaskButton.addEventListener('click', () => {
  console.log("mostrando todas las tareas archivadas")
});