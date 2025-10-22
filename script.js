// Datos de productos (puedes agregar más)
const productos = [
  { id: 1, nombre: "Labial Rosa", precio: 9.99, imagen: "https://via.placeholder.com/150/ff99c8/000000?text=Labial" },
  { id: 2, nombre: "Base Líquida", precio: 14.99, imagen: "https://via.placeholder.com/150/ffcce7/000000?text=Base" },
  { id: 3, nombre: "Sombras Brillantes", precio: 19.99, imagen: "https://via.placeholder.com/150/fed6ff/000000?text=Sombras" },
  { id: 4, nombre: "Rímel", precio: 7.49, imagen: "https://via.placeholder.com/150/ffe5ec/000000?text=Rimel" }
];

const listaProductos = document.getElementById('lista-productos');
const carritoSection = document.getElementById('carrito');
const carritoItems = document.getElementById('carrito-items');
const totalElemento = document.getElementById('total');
const cantidadCarrito = document.getElementById('cantidad-carrito');
let carrito = [];

// Mostrar productos
productos.forEach(p => {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>$${p.precio.toFixed(2)}</p>
    <button onclick="agregarAlCarrito(${p.id})">Agregar</button>
  `;
  listaProductos.appendChild(div);
});

// Agregar al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const item = carrito.find(i => i.id === id);

  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

// Eliminar producto
function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  carritoItems.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    total += item.precio * item.cantidad;
    const div = document.createElement('div');
    div.classList.add('carrito-item');
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <span>${item.nombre} x${item.cantidad}</span>
      <button onclick="eliminarDelCarrito(${item.id})">🗑️</button>
    `;
    carritoItems.appendChild(div);
  });

  totalElemento.textContent = total.toFixed(2);
  cantidadCarrito.textContent = carrito.length;
}

// Mostrar / Ocultar carrito
document.getElementById('ver-carrito').addEventListener('click', () => {
  carritoSection.classList.toggle('oculto');
});

document.getElementById('cerrar-carrito').addEventListener('click', () => {
  carritoSection.classList.add('oculto');
});

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
  carrito = [];
  actualizarCarrito();
});
