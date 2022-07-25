# GitHub Pages:

https://almamani.github.io/arteMamani/

# Descripción del Proyecto:

Sitio Web desarrollado para la venta de Obras de Arte y Accesorios de Decoración de una Artista Jujeña.

# Initialize project using Create React App:

Corresponde al Primer Desafío de React / Coderhouse: Consistió en subir al repositorio la primera versión del Proyecto FInal .

# Primera Version:

Corresponden a los Desafios "Menú e-commerce" y "Crea tu landing" de React / Coderhouse: se incorporaron al Proyecto Final los componenetes NavBar CartWidget e ItemsListContainer.

# Segunda Version:

Corresponden a los Desafios "Contador con Boton" y "Catálogo con MAPS y Promises" de React / Coderhouse: se incorporaron los componenetes: Item, Item List, y un Hook para manejar los estados del contador, a fin de realizar un catálogo de productos (que parten de un array), incorporados al SItio luego de una promesa, tomando el formato de tarjetas individuales con los datos de cada producto y la posibilidad de ejecutar un contador que será la cantidad a comprar (no supera el stock ni permite una cantidad menor a 1).

# Tercera Version:

Corresponde al Desafío "Detalle del Producto"de React / Coderhouse: se incorporaron al Proyecto Final los componenetes ItemDetail e ItemDetailContainer. Además de cargar los productos en el Home se carga puntualmente el artículo con id 1.

# Cuarta Version:

Corresponde a "La Primer Entrega del Proyecto Final" de React / Coderhouse: se incorporó al Proyecto Final la Navegación del sitio, permitiendo acceder a las distintas categorías incluidas en el Navbar, además es posible seleccionar un producto determinado haciendo click en el botón "Ver detalle", lo que permite mostrar el artículo, la info del mismo, y la posibilidad de ejecutar un contador que será la cantidad a comprar (no supera el stock ni permite una cantidad menor a 1).

# Quinta Version:

Corresponden a los Desafios "Sincronizar Counter" y "CartContex" de React / Coderhouse: se incorporó el componente ItemCount, separando sus funciones del ItemDetail que es quien lo llama, cuando se emite un evento Add se almacena la cantidad de intem a agregar iternamente a fin de que se puedan agregar posteriormente al carrito, una vez presionado Agregar Carrito, el ItemCoun, es reemplazado por el botón Finalizar Compra que permite navegar hacia el Carrito.
Además se incorpora el CartContex con un contex y el custom provider, con el array de productos que serán agregados al carrito y las funcionalidades correspondientes, (Agregar, Quitar, Remover, Verificar si un producto se encuentra en el carrito), al hacer click en Agregar al Carrito se guarda en el CartContex el producto, su cantidad en Forma de objeto y se va calculando la cantidad de productos agregados. El CartWidget toma esta cantidad de CartContex y la muestra al lado de la imagen del carrito.

# Sexta Version:

Corresponden al Desafío "Cart View" de React / Coderhouse:

- Componente Cart:
  • Desglose del carrito (a través de un map que permite mostrar los productos a través del Componente CartProduct), el precio total, y la opción de vaciar el carrito.
  • Ruta de acceso al Carrito desde el NavBar o desde el Detalle del producto (Botón Finalizar Compra).
  • Cuando no hay productos se muestra un mensaje y un botón para cargar todos los productos e iniciar la compra.

- Componente CartProduct:
  • Muestra los detalles del producto agregado.
  • Por cada producto, se agrega un botón para eliminar el producto.

- Componente CartWidget:
  • Muestra la cantidad total de productos solo cuando hay productos en el carrito (no muestra el 0).

# Septima Version:

Corresponden al Desafío "Item Colecction" de React / Coderhouse:

Una vez eliminado el async mocks se conectó la collección de productos (documentos) de Firestore a los componentes ItemListContainer y al ItemDetailContainer. Se permite la navegación entre categorías y el acceso a un producto determinado.

# Octava Version:

Corresponde al Desafío "Item Colecction II" de React / Coderhouse:

- Componente Venta: Permite guardar en Firebase, los datos del comprador y los productos adquiridos , se accede a este componente, haciendo click en "Finalizar la Compra". En caso de que el cliente quite todos los productos del carrito, se regresa a la vista de "Carrito Vacío, comience a comprar".
  • El componente venta cuenta con un formulario para tomar los datos del cliente, el mismo no se envía si algún campo está vacío.
  • Una vez lleno el formulario, al hacer click en "Enviar Compra" como respuesta se emite un Sweet Alert con un mensaje de confirmación y el id de la operación realizada proveniente de Firebase, posteriormente se vacía el carrito y utilizando el Hook Navigate se redirecciona al cliente al Home .
  • Se recorren los productos modificando el stock de acuerdo a la compra realizada
  En caso de que un producto alcance el stock 0 se reemplaza el botón mostrar detalle, por un mensaje que indica que el producto se encuentra sin stock . De esa manera se evita el uso indevido del list count ya que no se pueden agregar productos sin stock.
