import { openReminderForm } from "../stores/store";
import { confirmationPopup } from "../stores/store";

const editButtons = document.querySelectorAll('#btn-editar');
const confirmationModal = document.querySelectorAll('#btn-archivar');
const openConfirmationPopup = document.getElementById('archivar-reminder');
const closeConfirmationPopup = document.getElementById('btn-cancelar');
const archiveReminder = document.getElementById('btn-confirmar');

const handleEditReminder = () => {
  console.log("Desea editar el recordatorio?")
  openReminderForm.set(true);
}

// abrir el pop up de confirmación de archivar un recordatorio
const handleOpenConfirmation = () => {
  console.log("llamando al popup")
  openConfirmationPopup.classList.remove('hidden')
  confirmationPopup.set(true);
}

// cerrar el pop up de confirmación de archivar un recordatorio
const handleCloseConfirmation = () => {
  console.log("cerrando al popup")
  openConfirmationPopup.classList.add('hidden')
}

// confirmando archivar el un recordatorio
const handleArchiveReminder = () => {
  // TODO revisar como mandar la confirmación de archivado
  openConfirmationPopup.classList.add('hidden')
}

// abrir desde los botones editar de las vistas, la card de tarea
editButtons.forEach((button) => {
  button.addEventListener('click', handleEditReminder);
});

// abrir desde los botones archivar de las vistas, el popup de confirmación
confirmationModal.forEach((button) => {
  button.addEventListener('click', handleOpenConfirmation);
});

closeConfirmationPopup.addEventListener('click', handleCloseConfirmation);
archiveReminder.addEventListener('click', handleArchiveReminder);