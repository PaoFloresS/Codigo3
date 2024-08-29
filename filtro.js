// Tenemos un li de productos
//se define un array de objetos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//Se cambio getElementsByName ya que devuelve una colección de elementos, y no un solo elemento.y se cambio por querySelector para seleccionar solo un solo elemento.

// se seleccionan los elementos del DOM que se utilizarán
//se camiaron los nombres de los elemntos
//se agrego un . a lista----
//mostrara el producto
const listaDeProductos = document.querySelector(".lista-de-productos");
//Se camabio a inputFiltro
//campo de texto
const inputFiltro = document.querySelector(".input");
//se cambiaron comillas simples por dobles
//boton para busqueda
const botonDeFiltro = document.querySelector("button");


//mostrarProductos: Esta función toma un array de productos y muestra cada producto en el contenedor
const mostrarProductos = (productos) => {
  //innerHTML = '' limpia el contenedor '
  listaDeProductos.innerHTML = '';

  //agregamos los productos al contenedor y se iteran 
  productos.forEach(producto => {
    //para cada producto, crea un nuevo elemento div
    const divProducto = document.createElement("div");
   // Dentro del div, crea un p para el nombre del producto y una img para la imagen del producto
    divProducto.classList.add("producto");

    //creamos el elemento 'p' para los nombres de los productos
    const pTitulo = document.createElement("p");
    pTitulo.classList.add("titulo");
    pTitulo.textContent = producto.nombre;

    //se crea el elemento 'img' para las imagenes
    const imgProducto = document.createElement("img");
    imgProducto.setAttribute('src', producto.img);

    //agrega el 'p' y el 'img' al div del producto
    divProducto.appendChild(pTitulo);
    divProducto.appendChild(imgProducto);

    // Agregamos el div del producto al contenedor
    listaDeProductos.appendChild(divProducto);
  });
};

/*
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  //se ----------  appendChild se usa en un elemento del DOM y no en una colección de elementos.
  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

displayProductos: Esta función se menciona pero no está definida 
displayProductos(productos)
const botonDeFiltro = document.querySelector("button");
*/

// Función para filtrar productos según el texto de búsqueda
const filtrarProductos = (productos, texto) => {
  // Convierte el texto a minúsculas para la comparación
  const textoLower = texto.toLowerCase();
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(textoLower) ||
    item.color.toLowerCase().includes(textoLower)
  );
};

// Muestra todos los productos al cargar la página
mostrarProductos(productos);

// Maneja el clic en el botón de filtro
botonDeFiltro.addEventListener('click', () => {
 /* while (li.firstChild) {
  li.removeChild(li.firstChild); */
  
// Obtiene el texto del campo de búsqueda y elimina espacios al principio y al final
const textoFiltro = inputFiltro.value.trim();
if (textoFiltro === '') {
  // Si el campo está vacío, muestra todos los productos
  mostrarProductos(productos);
} else {
  // Filtra los productos según el texto de búsqueda y muestra los resultados
  const productosFiltrados = filtrarProductos(productos, textoFiltro);
  mostrarProductos(productosFiltrados);
}
});
/*
  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  */