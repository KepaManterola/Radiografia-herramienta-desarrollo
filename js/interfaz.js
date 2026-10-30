export function mostrarCaracteristicas(caracteristicas, lista, mensajeVacio, contador) {

    lista.replaceChildren();

    for (const caracteristica of caracteristicas) {

        const tarjeta = document.createElement("li");

        const nombre = document.createElement("h3");
        nombre.textContent = caracteristica.nombre;

        const categoria = document.createElement("p");
        categoria.textContent = "Categoría: " + caracteristica.categoria;

        const descripcion = document.createElement("p");
        descripcion.textContent = caracteristica.descripcion;

        tarjeta.append(nombre, categoria, descripcion);

        lista.append(tarjeta);
    }

    if (caracteristicas.length === 0) {
        mensajeVacio.classList.remove("oculto");
    } else {
        mensajeVacio.classList.add("oculto");
    }

    contador.textContent = "Características encontradas: " + caracteristicas.length;
}