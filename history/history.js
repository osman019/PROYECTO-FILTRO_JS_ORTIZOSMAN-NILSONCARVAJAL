function mostrarDatos(){
        fetch("https://api.spacexdata.com/v4/history")
        .then(res=>res.json())
        .then(data=> {
        console.log(data);
      
        document.getElementById("titulo").innerHTML= `
        ${data[0].title}
        `
        document.getElementById("informacion").innerHTML=`
        <h1><span>Date</span><br>${data[0].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[0].details}</h1><br>
         <h1><span>event date unix</span><br> ${data[0].event_date_unix}</h1><br>
        `
        document.getElementById("links").innerHTML=`
        <div id="links">
        <a id="link1"href="${data[0].links.article}">Website</a>
         </div>
        `
        document.getElementById("imagen").innerHTML=`

        <img id="icono" src="/img/informacion.png" alt="">
        `
      
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
      })
    
    
    }
    document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll("#p2");
    const infocohete = document.getElementById("infcohete");

    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"

        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[1].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[1].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[1].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[1].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
      const url = "https://api.spacexdata.com/v4/history"

      fetch(url)
   
      .then(res=>res.json())
      .then(data=> {
          console.log(data);
          document.getElementById("titulo").innerHTML= `
          ${data[0].title}
          `
          document.getElementById("informacion").innerHTML=`
         <h1><span>Date</span><br>${data[2].event_date_utc}</h1></br>
      <h1><span>Details</span><br> ${data[2].details}</h1><br>
                 <h1><span>event date unix</span><br> ${data[2].event_date_unix}</h1><br>
                  `
              document.getElementById("imagen").innerHTML=`
               <img id="icono" src="/img/informacion.png" alt="">
          `
          document.getElementById("infcohete").innerHTML=`
         
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
      const url = "https://api.spacexdata.com/v4/history"

      fetch(url)
   
      .then(res=>res.json())
      .then(data=> {
          console.log(data);
          document.getElementById("titulo").innerHTML= `
          ${data[3].title}
          `
          document.getElementById("informacion").innerHTML=`
         <h1><span>Date</span><br>${data[3].event_date_utc}</h1></br>
      <h1><span>Details</span><br> ${data[3].details}</h1><br>
                 <h1><span>event date unix</span><br> ${data[3].event_date_unix}</h1><br>
                  `
              document.getElementById("imagen").innerHTML=`
               <img id="icono" src="/img/informacion.png" alt="">
          `
          document.getElementById("infcohete").innerHTML=`
         
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
    const pages = document.querySelectorAll("#p5");
    const infocohete = document.getElementById("infcohete");
  
    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"
  
        fetch(url)
     
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[4].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[4].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[4].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[4].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
    const pages = document.querySelectorAll("#p6");
    const infocohete = document.getElementById("infcohete");
  
    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"
  
        fetch(url)
     
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[5].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[5].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[5].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[5].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
    const pages = document.querySelectorAll("#p7");
    const infocohete = document.getElementById("infcohete");
  
    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"
  
        fetch(url)
     
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[6].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[6].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[6].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[6].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
    const pages = document.querySelectorAll("#p8");
    const infocohete = document.getElementById("infcohete");
  
    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"
  
        fetch(url)
     
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[7].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[7].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[7].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[7].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
    const pages = document.querySelectorAll("#p9");
    const infocohete = document.getElementById("infcohete");
  
    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"
  
        fetch(url)
     
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[8].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[8].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[8].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[8].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
    const pages = document.querySelectorAll("#p10");
    const infocohete = document.getElementById("infcohete");
  
    // Función para obtener los datos de la API según el número de página
    function fetchData(page) {
        const url = "https://api.spacexdata.com/v4/history"
  
        fetch(url)
     
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            document.getElementById("titulo").innerHTML= `
            ${data[9].title}
            `
            document.getElementById("informacion").innerHTML=`
           <h1><span>Date</span><br>${data[9].event_date_utc}</h1></br>
        <h1><span>Details</span><br> ${data[9].details}</h1><br>
                   <h1><span>event date unix</span><br> ${data[9].event_date_unix}</h1><br>
                    `
                document.getElementById("imagen").innerHTML=`
                 <img id="icono" src="/img/informacion.png" alt="">
            `
            document.getElementById("infcohete").innerHTML=`
           
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
  
    
  
  




