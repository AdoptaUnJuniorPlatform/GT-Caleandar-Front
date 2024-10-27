
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll("[data-tab-content]");
    const formActions = document.querySelectorAll(".action-buttons");

    // Función para cambiar de pestaña y actualizar visibilidad de botones
    function changeTab(targetId) {
        // Actualiza la pestaña activa
        tabs.forEach((tab) => {
            tab.classList.toggle("active", tab.dataset.tab === targetId);
        });

        // Actualiza el contenido visible de la pestaña
        tabContents.forEach((content) => {
            content.classList.toggle("active", content.id === targetId);
        });

        // Muestra el grupo de botones correspondiente a la pestaña activa
        formActions.forEach((action) => {
            action.style.display = action.classList.contains(`${targetId}-actions`) ? "flex" : "none";
        });
    }

    // Configura el cambio de pestaña al hacer clic en los botones de las pestañas
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            changeTab(tab.dataset.tab);
        });
    });

    // Configuración de botones "Siguiente" y "Atrás" para navegar entre pestañas
    document.getElementById("next")?.addEventListener("click", () => changeTab("date-hour"));
    document.getElementById("nextReminder")?.addEventListener("click", () => changeTab("reminder"));
    document.getElementById("backDetails")?.addEventListener("click", () => changeTab("details"));
    document.getElementById("backDateHour")?.addEventListener("click", () => changeTab("date-hour"));

    // Configuración del botón "Cancelar" para cerrar el formulario
    document.getElementById("cancel-btn")?.addEventListener("click", () => {
        alert("Formulario cancelado.");
        // Aquí debes añadir lógica para cerrar el modal o limpiar el formulario.
    });

    // Inicializa mostrando la primera pestaña (Detalles) y sus botones
    changeTab("details");
});
