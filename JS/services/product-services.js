const listaDeProductos = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const crearProducto = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const eliminarProducto = (id) => {
    console.log("Eliminar a --->", id);
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

export const servicesProducts = {
    listaDeProductos,
    crearProducto,
    eliminarProducto,
};