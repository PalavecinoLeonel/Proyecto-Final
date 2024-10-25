// Redirigir al presionar "Volver al Inicio" solo si el botón "Volver al Inicio" existe en la página de registro
const backToLoginButton = document.getElementById('backToLoginButton');
if (backToLoginButton) {
    backToLoginButton.addEventListener('click', function() {
        window.location.href = '../index.html';  // Redirige a la página de login
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Redirigir al presionar "Logout" en el navbar
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = '../index.html';  // Redirige a la página de login
        });
    }
});