// Script para mejorar la accesibilidad y la navegación en la página

document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar la navegación por teclado
    function keyboardNavigation() {
        // Añade un listener a todos los elementos focusables
        document.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])').forEach(function(item) {
            item.addEventListener('keydown', function(e) {
                // Maneja la tecla de tabulación para mantener el foco dentro de la ventana modal, si existe
                if (e.key === 'Tab' && document.querySelector('.modal')) {
                    const focusableElements = document.querySelector('.modal').querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) /* shift + tab */ {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else /* tab */ {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        });
    }

    // Función para manejar acciones de accesibilidad
    function accessibilityActions() {
        // Añade control de accesibilidad para aumentar y disminuir el tamaño del texto
        const increaseFontBtn = document.getElementById('increase-font-size');
        const decreaseFontBtn = document.getElementById('decrease-font-size');

        if (increaseFontBtn && decreaseFontBtn) {
            increaseFontBtn.addEventListener('click', function() {
                document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) + 1) + 'px';
            });

            decreaseFontBtn.addEventListener('click', function() {
                document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) - 1) + 'px';
            });
        }
    }

    // Ejecuta las funciones de navegación y accesibilidad
    keyboardNavigation();
    accessibilityActions();
});
