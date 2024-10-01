
function mostrarDatos(){
fetch("https://api.spacexdata.com/v4/rockets")
.then(res=>res.json())
.then(data=> {
    console.log(data);
  
    document.getElementById("titulo").innerHTML= `
    ${data[0].name}
    `
    
    document.getElementById("informacion").innerHTML=`
    <h1><span>Ciudad</span><br>${data[0].country}</h1></br>
     <h1><span>Cost</span> <br>${data[0].cost_per_launch}</h1><br>
            <h1><span>First Flight</span><br> ${data[0].first_flight}</h1><br>
            <h1><span>Description<br></span> ${data[0].description}</h1><br>
            <h1><span>Wikipedia<span><br> <a id="enlace"href="${data[0].wikipedia}">${data[0].wikipedia}</a></h1>
      <img class="video" src="/img/DoIr.gif" alt="">
        
            `
        document.getElementById("imagen").innerHTML=`
        <img id="falcon1" src="${data[0].flickr_images[0]}" alt="nhgy">
         <img id="falcons" src="${data[0].flickr_images[1]}" alt="nhgy">
          <img id="falcont" src="/img/imagenfalcon1.jpg" alt="nhgy">
            <img id="falconc" src="/img/1imgfalcon1.jpg" alt="nhgy">
          
    `
    document.getElementById("infcohete").innerHTML=`
    <h4><span>Type</span> <br>${data[0].type}</h4><br>
    <h4><span>Propellant1</span><br> ${data[0].engines.propellant_1}</h4><br>
    <h4><span>Propellant2</span><br> ${data[0].engines.propellant_2}</h4><br>
    <h4><span>Version</span><br> ${data[0].engines.version}</h4><br>
    <h4><span>Layout</span><br>${data[0].engines.layout} </h4>
    <h4><span>Number</span><br>${data[0].engines.number} </h4>
    
`

  
    
})


}



document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll("#p2");
    const infocohete = document.getElementById("infcohete");

    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/rockets"

        fetch(url)
        fetch("https://api.spacexdata.com/v4/rockets")
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[1].name}
            `
            document.getElementById("informacion").innerHTML=`
            <h1><span>Ciudad</span><br>${data[1].country}</h1></br>
             <h1><span>Cost</span> <br>${data[1].cost_per_launch}</h1><br>
                    <h1><span>First Flight</span><br> ${data[1].first_flight}</h1><br>
                    <h1><span>Description<br></span> ${data[1].description}</h1><br>
                    <h1><span>Wikipedia<span><br> <a id="enlace"href="${data[1].wikipedia}">${data[1].wikipedia}</a></h1>
              <img class="video" src="/img/falcon9git.avif" alt="">
                
                    `
                document.getElementById("imagen").innerHTML=`
                    <img id="falcon1" src="${data[1].flickr_images[0]}" alt="">
                      <img id="falcons" src="${data[1].flickr_images[1]}" alt="">
                 <img id="falcont" src="${data[1].flickr_images[2]}" alt="">
                  <img id="falconc" src="${data[1].flickr_images[3]}" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
            <h4><span>Type</span> <br>${data[1].type}</h4><br>
            <h4><span>Propellant1</span><br> ${data[1].engines.propellant_1}</h4><br>
            <h4><span>Propellant2</span><br> ${data[1].engines.propellant_2}</h4><br>
            <h4><span>Version</span><br> ${data[1].engines.version}</h4><br>
            <h4><span>Layout</span><br>${data[1].engines.layout} </h4>
            <h4><span>Number</span><br>${data[1].engines.number} </h4>
        `
           
            
        })
    }

    // Función para mostrar los datos en el div 'infcohete'
    function renderData(data) {
        infocohete.innerHTML = ""; 
        data.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.textContent = item.name;
            infocohete.appendChild(itemElement);
        });
    }

    // Evento para cada página
    pages.forEach(page => {
        page.addEventListener("click", function() {
            const pageNumber = this.getAttribute("value");
            fetchData(pageNumber);
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });

    // Llamada inicial para cargar la primera página
    fetchData(1); // Por defecto cargar la página 1
});



document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll("#p3");
    const infocohete = document.getElementById("infcohete");

    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/rockets"

        fetch(url)
        fetch("https://api.spacexdata.com/v4/rockets")
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[2].name}
            `
            document.getElementById("informacion").innerHTML=`
            <h1><span>Ciudad</span><br>${data[2].country}</h1></br>
             <h1><span>Cost</span> <br>${data[2].cost_per_launch}</h1><br>
                    <h1><span>First Flight</span><br> ${data[2].first_flight}</h1><br>
                    <h1><span>Description<br></span> ${data[2].description}</h1><br>
                    <h1><span>Wikipedia<span><br> <a id="enlace"href="${data[2].wikipedia}">${data[2].wikipedia}</a></h1>
              <img class="video" src="/img/falconheavygit.gif" alt="">
                
                    `
                document.getElementById("imagen").innerHTML=`
                <img id="falcon1" src="${data[2].flickr_images[0]}" alt="">
                 <img id="falcons" src="${data[2].flickr_images[1]}" alt="">
                  <img id="falcont" src="${data[2].flickr_images[2]}" alt="">
                    <img id="falconc" src="${data[2].flickr_images[3]}" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
            <h4><span>Type</span> <br>${data[2].type}</h4><br>
            <h4><span>Propellant1</span><br> ${data[2].engines.propellant_1}</h4><br>
            <h4><span>Propellant2</span><br> ${data[2].engines.propellant_2}</h4><br>
            <h4><span>Version</span><br> ${data[2].engines.version}</h4><br>
            <h4><span>Layout</span><br>${data[2].engines.layout} </h4>
            <h4><span>Number</span><br>${data[2].engines.number} </h4>
        `
       
        })
    }

    // Función para mostrar los datos en el div 'infcohete'
    function renderData(data) {
        infocohete.innerHTML = ""; 
        data.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.textContent = item.name; 
            infocohete.appendChild(itemElement);
        });
    }

    // Evento para cada página
    pages.forEach(page => {
        page.addEventListener("click", function() {
            const pageNumber = this.getAttribute("value");
            fetchData(pageNumber);
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });

    // Llamada inicial para cargar la primera página
    fetchData(1); // Por defecto cargar la página 1
});



document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll("#p4");
    const infocohete = document.getElementById("infcohete");

    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/rockets"

        fetch(url)
        fetch("https://api.spacexdata.com/v4/rockets")
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[3].name}
            `
            document.getElementById("informacion").innerHTML=`
            <h1><span>Ciudad</span><br>${data[3].country}</h1></br>
             <h1><span>Cost</span> <br>${data[3].cost_per_launch}</h1><br>
                    <h1><span>First Flight</span><br> ${data[3].first_flight}</h1><br>
                    <h1><span>Description<br></span> ${data[3].description}</h1><br>
                    <h1><span>Wikipedia<span><br> <a id="enlace"href="${data[3].wikipedia}">${data[3].wikipedia}</a></h1>
              <img class="video" src="/img/falconstarshipgit.gif" alt="">
                
                    `
                document.getElementById("imagen").innerHTML=`
               <img id="falcon1" src="${data[3].flickr_images[0]}" alt="">
                <img id="falcons" src="${data[3].flickr_images[1]}" alt="">
                <img id="falcont" src="${data[3].flickr_images[2]}" alt="">
                   <img id="falconc" src="${data[3].flickr_images[3]}" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
            <h4><span>Type</span> <br>${data[3].type}</h4><br>
            <h4><span>Propellant1</span><br> ${data[3].engines.propellant_1}</h4><br>
            <h4><span>Propellant2</span><br> ${data[3].engines.propellant_2}</h4><br>
            <h4><span>Version</span><br> ${data[3].engines.version}</h4><br>
            <h4><span>Layout</span><br>${data[3].engines.layout} </h4>
            <h4><span>Number</span><br>${data[3].engines.number} </h4>
             
        `
           
            
        })
    }

   
    function renderData(data) {
        infocohete.innerHTML = ""; // Limpia el contenido anterior
        data.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.textContent = item.name; 
            infocohete.appendChild(itemElement);
        });
    }

    // Evento para cada página
    pages.forEach(page => {
        page.addEventListener("click", function() {
            const pageNumber = this.getAttribute("value");
            fetchData(pageNumber);
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });

    // Llamada inicial para cargar la primera página
    fetchData(1); // Por defecto cargar la página 1
});

