// login.js

// Redirigir al presionar "Entrar" solo si el formulario de login existe
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario por POST
        window.location.href = 'inicio.html';  // Redirige a la página de inicio
    });
}