async function cargarDatosEnLocalStorage() {
    const datos = await fetch('./js/json/data.json');
    const json = await datos.json();
    localStorage.setItem('libros', JSON.stringify(json));
}

cargarDatosEnLocalStorage();