// scripts.js

import './Auth/login.js';
import './Auth/registro.js';
import './Navegacion/navegacion.js';
import './Componentes/productos.js';



/*
Esta idea la guardé para mostrar productos de toda categoria, 
como para el home puede ser. Tambien da un resultado más desprolijo quizá.
fetch('productos.json')
  //SI RESPONDE O NO EL JSON
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    return response.json();
  })
  .then(data => {
    mostrarProductos(data);
  })
  .catch(error => {
    console.error('Hubo un problema con el fetch:', error);
  });

  //TRAE LAS CATEGORIAS
function mostrarProductos(data) {
  const contenedorGuitarras = document.getElementById('guitarras');
  const contenedorAmplificadores = document.getElementById('amplificadores');
  const contenedorAccesorios = document.getElementById('accesorios');

  data.categorias.guitarras.slice(0, 3).forEach(producto => {
    contenedorGuitarras.innerHTML += `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
      </div>
    `;
  });

  data.categorias.amplificadores.slice(0, 3).forEach(producto => {
    contenedorAmplificadores.innerHTML += `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
      </div>
    `;
  });

  data.categorias.accesorios.slice(0, 3).forEach(producto => {
    contenedorAccesorios.innerHTML += `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
      </div>
    `;
  });
}
*/