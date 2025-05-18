function obtenerDatos() {
    return JSON.parse(localStorage.getItem('libros'));
}

function construirHTML() {
    const datos = obtenerDatos();
    
    const libros = datos.map(({titulo, paginas, ano_publicacion, saga, autor, editorial}) => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const Pautor = document.createElement("p");
        const Peditorial = document.createElement("p");
        const Psaga = document.createElement("p");
        const Ppaginas = document.createElement("p");
        const Ppublicacion = document.createElement("p");

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(Pautor);
        article.appendChild(Peditorial);
        article.appendChild(Psaga);
        article.appendChild(Ppaginas);
        article.appendChild(Ppublicacion);

        h2.textContent = titulo;
        Pautor.textContent = `Autor: ${autor}`;
        Peditorial.textContent = `Editorial: ${editorial}`;
        Psaga.textContent = `Saga: ${saga}`;
        Ppaginas.textContent = `Páginas: ${paginas}`;
        Ppublicacion.textContent = `Año de publicación: ${ano_publicacion}`;
        img.src = `./images/coleccion/${titulo}.jpg`;

        return article;
    });

    return libros;
}

async function añadirHTML() {
    const contenedor = document.querySelector('#contenedor');
    const libros = await construirHTML();
    libros.forEach(libro => {
        contenedor.appendChild(libro);
    });
}

añadirHTML();