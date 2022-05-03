let yerba = document.createElement("img");
yerba.src = "/img/Yerba.Mañanita.jpg";
yerba.classList.add("fotoP");
let harina = document.createElement("img");
harina.src = "./img/harina.jpg";
harina.classList.add("fotoP");
let azucar = document.createElement("img");
azucar.src = "./img/Azucar.Ledesma.jpg";
azucar.classList.add("fotoP");
let pureTomate = document.createElement("img");
pureTomate.src = "./img/PureMarolio.jpg";
pureTomate.classList.add("fotoP");
let imagenes: any[] = [yerba, harina, azucar, pureTomate];

let contenedorProductos = document.getElementById("carrito");
let total = 0;
let sumar = 0;

let lista: string[] = [
  "Yerba Mate Mañanita",
  "Harina Comùn Marolio",
  "Azucar Ledesma",
  "Pure de tomates Marolio"
];
let precio: number[] = [380, 75, 110, 80];
let stock: number[] = [460, 380, 850, 570];

let cargarDatos = () => {
  for (let i: number = 0; i < lista.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("item-producto");
    let imgns = document.createElement("img");
    imgns = imagenes[i];
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = "$" + precio[i];
    let seleccionarCant = document.createElement("input");
    seleccionarCant.id = "seleccionarCantidad" + [i];
    seleccionarCant.type = "number";
    seleccionarCant.max = String(stock[i]);
    seleccionarCant.min = "0";
    let btnAgregar = document.createElement("button");
    btnAgregar.classList.add("botonAgregar");
    btnAgregar.innerText = "Agregar";
    btnAgregar.id = "Agregar" + [i];

    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(seleccionarCant);
    contenedorProductos?.appendChild(divProducto);
    divProducto.appendChild(imgns);
    divProducto.appendChild(btnAgregar);
  }
};

let comprarProd = () => {
  for (let i: number = 0; i < lista.length; i++) {
    let boton = document.getElementById("Agregar" + [i]);
    boton?.addEventListener("click", () => {
      let seleccionarCant = document.getElementById(
        "seleccionarCantidad" + [i]
      );

      let cantidadSelect = Number(seleccionarCant.value);
      if (cantidadSelect < 0 || cantidadSelect > stock[i]) {
        console.log("stock solicitado no disponible");
      } else {
        sumar = sumar + precio[i] * cantidadSelect;
      }
      console.log(
        "compre " +
          cantidadSelect +
          " " +
          lista[i] +
          " y el precio unitario es $ " +
          precio[i]
      );
      total = total + precio[i] * cantidadSelect;
    });
  }
};
let botonComprar = document.getElementById("comprar");
botonComprar?.addEventListener("click", function () {
  console.log(" El total de la compra es de $ " + total);
  console.log("Muchas gracias por su compra, vuelva pronto");
});
cargarDatos();
comprarProd();
