const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    const decreaseButton = producto.querySelector('.decrease');
    const increaseButton = producto.querySelector('.increase');
    const quantityDisplay = producto.querySelector('.quantity');
    const addToCartButton = producto.querySelector('.add-to-cart');
    
    let quantity = parseInt(quantityDisplay.textContent); // Obtener cantidad inicial

    // disminuir
    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    // aumentar
    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
    // Agregar al carrito
    addToCartButton.addEventListener('click', () => {
        const productName = producto.querySelector('h3').textContent;
        const price = producto.querySelector('p:nth-of-type(2)').textContent;
        alert(`${quantity} x ${productName} agregado(s) al carrito. Precio total: ${price.replace('$', '') * quantity}`);
    });
});

