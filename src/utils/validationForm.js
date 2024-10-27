//VALIDACION A MEDIAS
document.addEventListener('DOMContentLoaded', () => {
    // Validación del formulario en la pestaña de Recordatorios
    const form = document.getElementById("taskForm");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        // Lógica de validación del formulario me faltan cosas
        let valid = true;
        const name = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        if (!name.value.trim()) {
            nameError.textContent = "El nombre es obligatorio";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        const day = document.getElementById("day");
        const dayError = document.getElementById("dayError");
        if (!day.value) {
            dayError.textContent = "Selecciona una fecha";
            valid = false;
        } else {
            dayError.textContent = "";
        }

        const starTime = document.getElementById("starTime");
        const endTime = document.getElementById("endTime");
        const hourError = document.getElementById("hourError");
        if (starTime.value >= endTime.value) {
            hourError.textContent = "La hora de fin debe ser mayor que la de inicio";
            valid = false;
        } else {
            hourError.textContent = "";
        }

        if (valid) {
            alert("Formulario válido. Listo para enviar.");
        }
    });
});