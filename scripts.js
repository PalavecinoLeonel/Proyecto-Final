// Redirigir al presionar "Entrar" solo si el formulario de login existe
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario por POST
        window.location.href = 'inicio.html';  // Redirige a la página de inicio
    });
}

// Redirigir al presionar "Registrarse" solo si el botón de registrarse existe
const registerButton = document.getElementById('registerButton');
if (registerButton) {
    registerButton.addEventListener('click', function() {
        window.location.href = 'registro.html';  // Redirige a la página de registro
    });
}

// Redirigir al presionar "Registrarse" solo si el formulario de login existe
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario por POST
        window.location.href = 'index.html';  // Redirige a la página de inicio
    });
}

// Redirigir al presionar "Volver al Inicio" solo si el botón "Volver al Inicio" existe en la página de registro
const backToLoginButton = document.getElementById('backToLoginButton');
if (backToLoginButton) {
    backToLoginButton.addEventListener('click', function() {
        window.location.href = 'index.html';  // Redirige a la página de login
    });
}

// Redirigir al presionar "Logout" en el navbar
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        window.location.href = 'index.html';  // Redirige a la página de login
    });
}
