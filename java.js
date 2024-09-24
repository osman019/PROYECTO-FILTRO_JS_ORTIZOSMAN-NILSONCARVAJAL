fetch('https://api.spacexdata.com/v4/launches/:id')
.then(Response => Response,json())
.then(data => {
      console.log(data);

    mostrarDatos(data);
})
.catch(error => 
    console.log('error:',error)
)
function mostrarDatos(data) {
    const container = document.getElementById('contenedor');

   
    const nombreMision = document.createElement('h1');
    nombreMision.textContent = data.name;
    container.appendChild(nombreMision);

    // Mostrar la fecha de lanzamiento
    const fechaLanzamiento = document.createElement('p');
    fechaLanzamiento.textContent = `Fecha de lanzamiento: ${new Date(data.date_utc).toLocaleString()}`;
    container.appendChild(fechaLanzamiento);

    // Mostrar el enlace al webcast
    const enlaceWebcast = document.createElement('a');
    enlaceWebcast.href = data.links.webcast;
    enlaceWebcast.textContent = 'Ver webcast';
    container.appendChild(enlaceWebcast);

    // Mostrar imágenes de Flickr
    data.links.flickr.original.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        container.appendChild(img);
    });
}