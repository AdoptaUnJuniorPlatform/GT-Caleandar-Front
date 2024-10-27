
// Función de validación del formulario
function validateForm() {
    let isValid = true;

    // Validación del nombre de la tarea
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "El nombre de la tarea es obligatorio.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validación de participantes
    const participantInput = document.getElementById("participant");
    const participantError = document.getElementById("participantError");
    if (participantInput.value.trim() === "") {
        participantError.textContent = "Debe ingresar al menos un participante.";
        isValid = false;
    } else {
        participantError.textContent = "";
    }

    // Validación del estado
    const statusInput = document.getElementById("status");
    const statusError = document.getElementById("statusError");
    if (!statusInput.value) {
        statusError.textContent = "Seleccione un estado.";
        isValid = false;
    } else {
        statusError.textContent = "";
    }

    // Validación de la descripción
    const descriptionInput = document.getElementById("description");
    const descriptionError = document.getElementById("descriptionError");
    if (descriptionInput.value.trim() === "") {
        descriptionError.textContent = "La descripción es obligatoria.";
        isValid = false;
    } else {
        descriptionError.textContent = "";
    }

    // Validación de la fecha
    const dayInput = document.getElementById("day");
    const dayError = document.getElementById("dayError");
    if (dayInput.value.trim() === "") {
        dayError.textContent = "Seleccione una fecha.";
        isValid = false;
    } else {
        dayError.textContent = "";
    }

    // Validación de la hora de inicio
    const startTimeInput = document.getElementById("starTime");
    const hourError = document.getElementById("hourError");
    if (startTimeInput.value.trim() === "") {
        hourError.textContent = "Seleccione una hora de inicio.";
        isValid = false;
    } else {
        hourError.textContent = "";
    }

    // Validación de la hora de fin (opcional)
    const endTimeInput = document.getElementById("endTime");
    if (endTimeInput.value.trim() !== "" && startTimeInput.value > endTimeInput.value) {
        hourError.textContent = "La hora de fin debe ser posterior a la de inicio.";
        isValid = false;
    } else if (endTimeInput.value.trim() === "" || startTimeInput.value <= endTimeInput.value) {
        hourError.textContent = "";
    }

    // Validación de la prioridad
    const priorityInput = document.getElementById("priority");
    const priorityError = document.getElementById("priorityError");
    if (!priorityInput.value) {
        priorityError.textContent = "Seleccione una prioridad.";
        isValid = false;
    } else {
        priorityError.textContent = "";
    }

    // Validación de la notificación
    const alertInput = document.getElementById("alert");
    const alertError = document.getElementById("alertError");
    if (!alertInput.value) {
        alertError.textContent = "Seleccione una opción de notificación.";
        isValid = false;
    } else {
        alertError.textContent = "";
    }

    // Validación de la repetición
    const repeatInput = document.getElementById("repeat");
    const repeatError = document.getElementById("repeatError");
    if (!repeatInput.value) {
        repeatError.textContent = "Seleccione una opción de repetición.";
        isValid = false;
    } else {
        repeatError.textContent = "";
    }

    return isValid;
}

// Exportar la función
export default validateForm;
