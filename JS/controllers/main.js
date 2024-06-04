import { servicesProducts } from "../services/product-services.js";

const contenedorProductos = document.querySelector("[data-productos]");
const formulario = document.querySelector("[data-form]");

function crearTarjeta (name, price, image, id) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <div class="contenedorImagen">
            <img class="imgProductos" src="${image}" alt="${name}">
        </div>
        <div class="contenedorTarjetaInfo">
            <p class="textosTarjeta">${name}</p>
            <div class="contenedorTarjetaPrecio">
                <p class="textosTarjeta">$${price}</p>
                <button class="botonEliminar" data-id id="${id}">
                    <img class="imgEliminar" src="./assets/img-borrar.png" alt="Eliminar">
                </button>
            </div>
        </div>
    `
    contenedorProductos.appendChild(tarjeta);

    const botonEliminar = tarjeta.querySelector('.botonEliminar');
    botonEliminar.addEventListener("click", () => {
        const id = botonEliminar.id
        servicesProducts.eliminarProducto(id).then( respuesta => {
            console.log(respuesta);
        }).catch(err => alert("Hubo un error"));
    });

    return tarjeta;
}

const render = async () => {
    try {
        const productosLista = await servicesProducts.listaDeProductos();
        
        productosLista.forEach(producto => {
            contenedorProductos.appendChild(
                crearTarjeta(
                    producto.name,
                    producto.price,
                    producto.image,
                    producto.id
                )
            )
        })

    } catch (error) {
        console.log(error);
    }
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const imagen = document.querySelector("[data-image]").value;

    servicesProducts
        .crearProducto(nombre, precio, imagen)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

    formulario.reset();
})

render();