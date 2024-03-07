// script.js

document.addEventListener('DOMContentLoaded', function () {
    const englishButton = document.getElementById('english-button');
    const spanishButton = document.getElementById('spanish-button');

    // Función para cambiar el idioma a inglés
    function switchToEnglish() {
        // Cambia el atributo "data-lang" de cada elemento a "en"
        document.querySelectorAll('[data-lang]').forEach(function (element) {
            const langKey = element.getAttribute('data-lang');
            element.textContent = translations.en[langKey] || element.textContent;
        });
    }

    // Función para cambiar el idioma a español
    function switchToSpanish() {
        // Cambia el atributo "data-lang" de cada elemento a "es"
        document.querySelectorAll('[data-lang]').forEach(function (element) {
            const langKey = element.getAttribute('data-lang');
            element.textContent = translations.es[langKey] || element.textContent;
        });
    }

    // Manejadores de eventos para los botones
    if (englishButton) {
        englishButton.addEventListener('click', switchToEnglish);
    }

    if (spanishButton) {
        spanishButton.addEventListener('click', switchToSpanish);
    }
});

// Objeto con las traducciones
const translations = {
    en: {
        'en': 'en',
        'es': 'es',
        // Agrega más traducciones según sea necesario
    },
    es: {
        'en': 'inglés',
        'es': 'español',
        // Agrega más traducciones según sea necesario
    },
};
