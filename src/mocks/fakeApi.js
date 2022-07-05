const products = [
  {
    id: 1,
    nombre: "Alfombra #1",
    img: "https://i.postimg.cc/zDSNGQXM/alfombra1.png",
    precio: 1500,
    stock: 5,
    categoria: "alfombras",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    nombre: "Alfombra #2",
    img: "https://i.postimg.cc/1znnxSSb/alfombra2.png",
    precio: 1300,
    stock: 8,
    categoria: "alfombras",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    nombre: "Alfombra #3",
    img: "https://i.postimg.cc/gkQgFzbP/alfombra3.png",
    precio: 1100,
    stock: 10,
    categoria: "alfombras",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    nombre: "Artesania #1",
    img: "https://i.postimg.cc/J4zhV8cK/artesania1.png",
    precio: 1050,
    stock: 2,
    categoria: "artesanias",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    nombre: "Artesania #2",
    img: "https://i.postimg.cc/jj0K5YNp/artesania2.png",
    precio: 1010,
    stock: 1,
    categoria: "artesanias",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    nombre: "Artesania #3",
    img: "https://i.postimg.cc/2ysmBsML/artesania3.png",
    precio: 1150,
    stock: 7,
    categoria: "alfombra",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    nombre: "Cuadro #1",
    img: "https://i.postimg.cc/vBZK80qR/cuadro1.png",
    precio: 1500,
    stock: 5,
    categoria: "cuadros",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    nombre: "Cuadro #2",
    img: "https://i.postimg.cc/x1YVD32Q/cuadro2.png",
    precio: 1300,
    stock: 8,
    categoria: "cuadros",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    nombre: "Cuadro #3",
    img: "https://i.postimg.cc/zDRsycD5/cuadro3.png",
    precio: 1100,
    stock: 10,
    categoria: "cuadros",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const product = {
  id: 1,
  nombre: "Alfombra #1",
  img: "https://i.postimg.cc/zDSNGQXM/alfombra1.png",
  precio: 1500,
  stock: 5,
  categoria: "alfombras",
  descripcion:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const getProds = new Promise((resolve, reject) => {
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

export const getProd = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(product);
    } else {
      reject("error");
    }
  }, 3000);
});
