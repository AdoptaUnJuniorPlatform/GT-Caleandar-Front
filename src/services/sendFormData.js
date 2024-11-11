// Función para enviar los datos al backend
export default async function sendFormData(data) {
    const user = firebase.auth().currentUser;
    if (!user) {
        throw new Error("No estás autenticado.");
    }

    const userId = user.uid;
    const idToken = await user.getIdToken();

    // Procesar participantes (opcional)
    const requestData = {
        ...data,
        userId,
        participants: data.participant
            ? data.participant.split(',').map(item => item.trim())
            : [],
    };

    const response = await fetch('http://localhost:5001/caleandar-leanmind/us-central1/endDatos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`,
        },
        body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar los datos.");
    }

    return await response.json();
}
