
const messages = [
    "Tu futuro profesional comienza hoy.",
    "Encuentra la oportunidad que mereces.",
    "El talento de Caracas en un solo lugar.",
    "Transforma tu carrera profesional."
];

let currentIndex = 0;
const textElement = document.getElementById("fade-text");

function changeText() {
    // 1. Empezar fade out
    textElement.classList.remove("fade-in");
    textElement.classList.add("fade-out");

    setTimeout(() => {
        // 2. Cambiar el texto después del fade out
        currentIndex = (currentIndex + 1) % messages.length;
        textElement.innerText = messages[currentIndex];

        // 3. Empezar fade in
        textElement.classList.remove("fade-out");
        textElement.classList.add("fade-in");
    }, 1000); // Tiempo que dura la transición de salida
}

// Ejecutar cada 4 segundos
setInterval(changeText, 4000);

