const listaDeProductos = () => {
    return fetch("https://alurageek-fakeapi.vercel.app/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const crearProducto = (name, price, image) => {
    return fetch("https://alurageek-fakeapi.vercel.app/products", {
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
    return fetch(`https://alurageek-fakeapi.vercel.app/products/${id}`, {
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