import validateForm from "../utils/validationForm";
import sendFormData from "./sendFormData";
import { getFrequencyData, resetFrequencyForm } from "../utils/frecuencySelect";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm");
    form.addEventListener("submit", handleFormSubmit);
});

// Función para manejar el envío del formulario
export async function handleFormSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    const form = document.getElementById("taskForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const formError = document.getElementById("formError");

    const participants = data.participant
        ? data.participant.split(',').map((item) => item.trim())
        : [];

    const frequencyData = getFrequencyData();

    const requestData = {
        ...data,
        dayEnd: data.dayEnd || null,
        participants,
        frequencyData,
    };

    try {
        await sendFormData(requestData);
        alert("Recordatorio creado exitosamente.");
        formError.textContent = "";
        resetFrequencyForm();
        form.reset();
    } catch (error) {
        if (error.message === "No estás autenticado.") {
            formError.textContent = "Por favor, inicia sesión para crear un recordatorio.";
        } else if (error.message) {
            formError.textContent = error.message;
        } else {
            formError.textContent = "Hubo un error al enviar el formulario. Inténtalo de nuevo más tarde.";
        }
        console.error("Error al enviar los datos:", error);
    }
}