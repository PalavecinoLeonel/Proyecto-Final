// Redirigir de "index.html" a "registro.html" al presionar "Registrarse" solo si el botón de registrarse existe
const registerButton = document.getElementById('registerButton');
if (registerButton) {
    registerButton.addEventListener('click', function() {
        window.location.href = 'Auth/registro.html';  // Redirige a la página de registro
    });
}
console.log('registro.js cargado');
// Redirigir al presionar "Registrarse" solo si el formulario de login existe
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario por POST
        window.location.href = '../index.html';  // Redirige a la página de inicio
    });
}