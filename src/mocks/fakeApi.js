const products = [
  {
    id: 1,
    nombre: "Cuadro 1",
    img: "https://picsum.photos/id/0/600",
    precio: 1500,
    stock: 5,
  },
  {
    id: 2,
    nombre: "Cuadro 2",
    img: "https://picsum.photos/id/10/600",
    precio: 1300,
    stock: 8,
  },
  {
    id: 3,
    nombre: "Cuadro 3",
    img: "https://picsum.photos/id/20/600",
    precio: 1100,
    stock: 10,
  },
  {
    id: 4,
    nombre: "Cuadro 4",
    img: "https://picsum.photos/id/30/600",
    precio: 1050,
    stock: 2,
  },
  {
    id: 5,
    nombre: "Cuadro 5",
    img: "https://picsum.photos/id/40/600",
    precio: 1010,
    stock: 1,
  },
  {
    id: 6,
    nombre: "Cuadro 6",
    img: "https://picsum.photos/id/50/600",
    precio: 1150,
    stock: 7,
  },
];

export const getData = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("error");
    }
  }, 3000);
});
