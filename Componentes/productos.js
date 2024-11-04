document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la categoría directamente desde el atributo data-categoria en el body
    const categoria = document.body.getAttribute("data-categoria");

    if (!categoria) {
        console.error("No se encontró la categoría en el atributo data-categoria del body.");
        return;
    }

    fetch("../productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            const productos = data.categorias[categoria];
            const galeriaProductos = document.querySelector(".galeria-productos");

            if (!galeriaProductos) {
                console.error("No se encontró el contenedor .galeria-productos en el HTML.");
                return;
            }

            if (!productos) {
                console.error(`No se encontraron productos para la categoría: ${categoria}`);
                return;
            }

            galeriaProductos.innerHTML = ""; // Limpia cualquier contenido anterior

            productos.forEach(producto => {
                const productoHTML = `
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <div class="info-producto">
                            <h3 class="titulo-producto">${producto.nombre}</h3>
                            <p class="descripcion-producto">${producto.descripcion}</p>
                            <p class="precio-producto">$${producto.precio.toLocaleString()}</p>
                            <button class="decrease">-</button>
                            <span class="quantity">1</span>
                            <button class="increase">+</button>
                            <button class="add-to-cart">Agregar al carrito</button>
                        </div>
                    </div>
                `;
                galeriaProductos.insertAdjacentHTML("beforeend", productoHTML);
            });

            // Llama a la función para agregar funcionalidad a los botones
            agregarFuncionalidadBotones();
        })
        .catch(error => console.error("Error al cargar los productos:", error));
});

function agregarFuncionalidadBotones() {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const decreaseButton = producto.querySelector('.decrease');
        const increaseButton = producto.querySelector('.increase');
        const quantityDisplay = producto.querySelector('.quantity');
        const addToCartButton = producto.querySelector('.add-to-cart');
        
        let quantity = parseInt(quantityDisplay.textContent);

        // Disminuir cantidad
        decreaseButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        // Aumentar cantidad
        increaseButton.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });

        // Agregar al carrito
        addToCartButton.addEventListener('click', () => {
            const productName = producto.querySelector('.titulo-producto').textContent;
            const price = parseFloat(producto.querySelector('.precio-producto').textContent.replace('$', ''));

            // Estructura del producto que se agregará al carrito (el localstorage)
            const productoCarrito = {
                nombre: productName,
                precio: price,
                cantidad: quantity
            };
            agregarProductoAlCarrito(productoCarrito);

            alert(`${quantity} x ${productName} agregado(s) al carrito. Precio total: $${(price * quantity).toFixed(2)}`);
        });
    });
}

// Función para guardar el producto en el localStorage
function agregarProductoAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}