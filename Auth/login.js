// login.js

// Redirigir al presionar "Entrar" solo si el formulario de login existe
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario por POST

        // Guarda la información del usuario logueado (el sessionStorage) 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const user = {
            email: email,
            password: password
        };
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(user));
        //

        window.location.href = 'Auth/inicio.html';  // Redirige a la página de inicio
    });
}