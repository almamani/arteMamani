> ![logo MariArt](./src/assets/img/logo.png)

> ### Descripción del Proyecto:

<p>Sitio Web desarrollado para la venta de Obras de Arte y Accesorios de Decoración.</p>

##### GitHub Pages: https://almamani.github.io/arteMamani/

> ### Funcionamiento y Características:

**Componente Navbar:**

- Cuenta con un componenete Navbar que permite navegar por las distinas categorías de productos. Dichas categorías se toman dinámincamente de una colección dentro de una base de datos de Firebase .

**Los componentes ItemListContainer, ItemList e Item:**

- Una vez seleccionada la categoría, a través de los componentes ItemListContainer, ItemList e Item se cargan los productos de acuerdo a la categoría seleccionada.

- El botón "Ver Detalle" dentro de la tarjeta de cada producto permite acceder al detalle del mismo, mostrando la descripción, stock, precio y la posibilidad de ejecutar un contador que será la cantidad a comprar (no supera el stock ni permite una cantidad menor a 1). Dicho contador cuenta con un hooks que permite manejar sus estados y funcionamiento.

**Componente Cart:**

- Se incorpora el CartContex con un contex y el custom provider, con el array de productos que serán agregados al carrito y las funcionalidades correspondientes, (Agregar, Quitar, Remover, Verificar si un producto se encuentra en el carrito)
- Desglose del carrito (a través de un map que permite mostrar los productos a través del Componente CartProduct), el precio total, y la opción de vaciar el carrito.
- Ruta de acceso al Carrito desde el NavBar o desde el Detalle del producto (Botón Finalizar Compra).
- Cuando no hay productos se muestra un mensaje y un botón para cargar todos los productos e iniciar la compra.

**Componente CartProduct:**

- Muestra los detalles del producto agregado.
- Por cada producto, se agrega un botón para eliminar el producto.

**Componente CartWidget:**

- Muestra la cantidad total de productos solo cuando hay productos en el carrito (no muestra el 0).

**Componente Venta:**

- Permite guardar en Firebase, los datos del comprador y los productos adquiridos , se accede a este componente, haciendo click en "Finalizar la Compra". En caso de que el cliente quite todos los productos del carrito, se regresa a la vista de "Carrito Vacío, comience a comprar".
- El componente venta cuenta con un formulario para tomar los datos del cliente, el mismo no se envía si algún campo está vacío.
- Una vez lleno el formulario, al hacer click en "Enviar Compra" como respuesta se emite un Sweet Alert con un mensaje de confirmación y el id de la operación realizada proveniente de Firebase, posteriormente se vacía el carrito y utilizando el Hook Navigate se redirecciona al cliente al Home .
- Se recorren los productos modificando el stock de acuerdo a la compra realizada
  En caso de que un producto alcance el stock 0 se reemplaza el botón mostrar detalle, por un mensaje que indica que el producto se encuentra sin stock . De esa manera se evita el uso indevido del list count ya que no se pueden agregar productos sin stock.
  Además se respalda todo en LocalStorage para no perder la compra al recargar o volver a la página

> ### Herramientas utilizadas:

- React.
- Firebase.
- Bootstrap: para incorporar spinner (al cargar los productos, al ingresar al detalle del artículo seleccionado), y para algunos estilos.
- Sweet alert 2: uso de un mensaje al finalizar la compra.

> ### Para Probar el Repositorio del Proyecto:

**_1. Clonar Repositorio:_** git clone https://github.com/almamani/arteMamani
**_2. Dentro de la carpeta del proyecto ejecutar:_** npm install
**_3. Posteriormente ejecutar:_** npm start
