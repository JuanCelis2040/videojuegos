// Puedes agregar funciones o interactividad aquí según sea necesario
document.addEventListener('DOMContentLoaded', function () {
    // Código JavaScript aquí
});
// Define un objeto con las traducciones
const translations = {
    "es": {
        "home": "Inicio",
        "games": "Juegos",
        "news": "Noticias",
        "contact": "Contacto",
        "footer": "© 2024 Tu Sitio de Videojuegos"
    },
    "en": {
        "home": "Home",
        "games": "Games",
        "news": "News",
        "contact": "Contact",
        "footer": "© 2024 Your Gaming Site"
    }
};

// Configura el idioma inicial
let currentLanguage = "es";

document.addEventListener('DOMContentLoaded', function () {
    // Código JavaScript aquí
});

// Función para cambiar el idioma
function changeLanguage() {
    // Cambia el idioma
    currentLanguage = (currentLanguage === "es") ? "en" : "es";

    // Actualiza el contenido de la página
    updateContent();
}

// Función para actualizar el contenido de la página según el idioma
function updateContent() {
    document.getElementById("language-toggle").textContent = (currentLanguage === "es") ? "🌐" : "🇺🇸";
    
    // Actualiza el contenido de la navegación
    document.querySelector('nav a:nth-child(1)').textContent = translations[currentLanguage]["home"];
    document.querySelector('nav a:nth-child(2)').textContent = translations[currentLanguage]["games"];
    document.querySelector('nav a:nth-child(3)').textContent = translations[currentLanguage]["news"];
    document.querySelector('nav a:nth-child(4)').textContent = translations[currentLanguage]["contact"];

    // Actualiza el contenido del pie de página
    document.querySelector('footer p').textContent = translations[currentLanguage]["footer"];
}
