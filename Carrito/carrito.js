function mostrarCarrito() {
    const carritoContainer = document.getElementById("carritoContainer");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoContainer.innerHTML = ""; // Limpiatodo antes

    //se fija si el carrito esta vacio
    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    carrito.forEach((producto, index) => {
        const productoElemento = document.createElement("div");
        productoElemento.classList.add("producto-carrito");

        productoElemento.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <p>Cantidad: ${producto.cantidad}</p>           
            <button class="eliminar-producto" data-index="${index}">Eliminar</button>
        `;
        carritoContainer.appendChild(productoElemento);
    });

    //Elimina del carrito 
    const botonesEliminar = document.querySelectorAll(".eliminar-producto");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProductoDelCarrito);
    });
}

function eliminarProductoDelCarrito(event) {
    const index = event.target.getAttribute("data-index");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Elimina
    carrito.splice(index, 1);
    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Ejecuta la función al cargar la página
document.addEventListener("DOMContentLoaded", mostrarCarrito);