



function mostrarDatos(){
    fetch("https://api.spacexdata.com/v4/capsules")
    .then(res=>res.json())
    .then(data=> {
    console.log(data);
  
    document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
    ${data[0].title}
    `
    document.getElementById("informacion").innerHTML=`
     <h1><span>Reuse</span><br>${data[0].reuse_count}</h1></br>
             <h1><span>Landings in water</span> <br>${data[0].water_landings}</h1><br>
                    <h1><span>Landings on Earth</span><br> ${data[0].land_landings}</h1><br>
                <h1><span>Update<br></span> ${data[0].last_update}</h1><br>
                       <h1><span>Serial<br></span> ${data[0].serial}</h1><br>
    `
    document.getElementById("links").innerHTML=`
    <div id="links">
    <a id="link1"href="${data[0].links.article}">Website</a>
     </div>
    `
    document.getElementById("imagen").innerHTML=`
<img class="Capsule1" src="/img/capsule1.jpg" alt="">
   
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
    const url = "https://api.spacexdata.com/v4/capsules"

    fetch(url)
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
        ${data[0].title}
        `
        document.getElementById("informacion").innerHTML=`
       <h1><span>Reuse</span><br>${data[1].reuse_count}</h1></br>
             <h1><span>Landings in water</span> <br>${data[1].water_landings}</h1><br>
                    <h1><span>Landings on Earth</span><br> ${data[1].land_landings}</h1><br>
                <h1><span>Update<br></span> ${data[1].last_update}</h1><br>
                       <h1><span>Serial<br></span> ${data[1].serial}</h1><br>
                `
            document.getElementById("imagen").innerHTML=`
            <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
  const url = "https://api.spacexdata.com/v4/capsules"

  fetch(url)

  .then(res=>res.json())
  .then(data=> {
      console.log(data);
      document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
      ${data[0].title}
      `
      document.getElementById("informacion").innerHTML=`
         <h1><span>Reuse</span><br>${data[2].reuse_count}</h1></br>
             <h1><span>Landings in water</span> <br>${data[2].water_landings}</h1><br>
                    <h1><span>Landings on Earth</span><br> ${data[2].land_landings}</h1><br>
                <h1><span>Update<br></span> ${data[2].last_update}</h1><br>
                       <h1><span>Serial<br></span> ${data[2].serial}</h1><br>
              `
          document.getElementById("imagen").innerHTML=`
          <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
  const url = "https://api.spacexdata.com/v4/capsules"

  fetch(url)

  .then(res=>res.json())
  .then(data=> {
      console.log(data);
      document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
      ${data[0].title}
      `
      document.getElementById("informacion").innerHTML=`
 <h1><span>Reuse</span><br>${data[3].reuse_count}</h1></br>
             <h1><span>Landings in water</span> <br>${data[3].water_landings}</h1><br>
                    <h1><span>Landings on Earth</span><br> ${data[3].land_landings}</h1><br>
                <h1><span>Update<br></span> ${data[3].last_update}</h1><br>
                       <h1><span>Serial<br></span> ${data[3].serial}</h1><br>
              `
          document.getElementById("imagen").innerHTML=`
           <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
      const url = "https://api.spacexdata.com/v4/capsules"
    
      fetch(url)
    
      .then(res=>res.json())
      .then(data=> {
          console.log(data);
          document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
          ${data[0].title}
          `
          document.getElementById("informacion").innerHTML=`
     <h1><span>Reuse</span><br>${data[4].reuse_count}</h1></br>
                 <h1><span>Landings in water</span> <br>${data[4].water_landings}</h1><br>
                        <h1><span>Landings on Earth</span><br> ${data[4].land_landings}</h1><br>
                    <h1><span>Update<br></span> ${data[4].last_update}</h1><br>
                           <h1><span>Serial<br></span> ${data[4].serial}</h1><br>
                  `
              document.getElementById("imagen").innerHTML=`
               <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
          const url = "https://api.spacexdata.com/v4/capsules"
        
          fetch(url)
        
          .then(res=>res.json())
          .then(data=> {
              console.log(data);
              document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
              ${data[0].title}
              `
              document.getElementById("informacion").innerHTML=`
         <h1><span>Reuse</span><br>${data[5].reuse_count}</h1></br>
                     <h1><span>Landings in water</span> <br>${data[5].water_landings}</h1><br>
                            <h1><span>Landings on Earth</span><br> ${data[5].land_landings}</h1><br>
                        <h1><span>Update<br></span> ${data[5].last_update}</h1><br>
                               <h1><span>Serial<br></span> ${data[5].serial}</h1><br>
                      `
                  document.getElementById("imagen").innerHTML=`
                   <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
              const url = "https://api.spacexdata.com/v4/capsules"
            
              fetch(url)
            
              .then(res=>res.json())
              .then(data=> {
                  console.log(data);
                  document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
                  ${data[0].title}
                  `
                  document.getElementById("informacion").innerHTML=`
             <h1><span>Reuse</span><br>${data[6].reuse_count}</h1></br>
                         <h1><span>Landings in water</span> <br>${data[6].water_landings}</h1><br>
                                <h1><span>Landings on Earth</span><br> ${data[6].land_landings}</h1><br>
                            <h1><span>Update<br></span> ${data[6].last_update}</h1><br>
                                   <h1><span>Serial<br></span> ${data[6].serial}</h1><br>
                          `
                      document.getElementById("imagen").innerHTML=`
                       <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
                  const url = "https://api.spacexdata.com/v4/capsules"
                
                  fetch(url)
                
                  .then(res=>res.json())
                  .then(data=> {
                      console.log(data);
                      document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
                      ${data[0].title}
                      `
                      document.getElementById("informacion").innerHTML=`
                 <h1><span>Reuse</span><br>${data[5].reuse_count}</h1></br>
                             <h1><span>Landings in water</span> <br>${data[5].water_landings}</h1><br>
                                    <h1><span>Landings on Earth</span><br> ${data[5].land_landings}</h1><br>
                                <h1><span>Update<br></span> ${data[5].last_update}</h1><br>
                                       <h1><span>Serial<br></span> ${data[5].serial}</h1><br>
                              `
                          document.getElementById("imagen").innerHTML=`
                           <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
                      const url = "https://api.spacexdata.com/v4/capsules"
                    
                      fetch(url)
                    
                      .then(res=>res.json())
                      .then(data=> {
                          console.log(data);
                          document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
                          ${data[0].title}
                          `
                          document.getElementById("informacion").innerHTML=`
                     <h1><span>Reuse</span><br>${data[7].reuse_count}</h1></br>
                                 <h1><span>Landings in water</span> <br>${data[7].water_landings}</h1><br>
                                        <h1><span>Landings on Earth</span><br> ${data[7].land_landings}</h1><br>
                                    <h1><span>Update<br></span> ${data[7].last_update}</h1><br>
                                           <h1><span>Serial<br></span> ${data[7].serial}</h1><br>
                                  `
                              document.getElementById("imagen").innerHTML=`
                               <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
                          const url = "https://api.spacexdata.com/v4/capsules"
                        
                          fetch(url)
                        
                          .then(res=>res.json())
                          .then(data=> {
                              console.log(data);
                              document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
                              ${data[0].title}
                              `
                              document.getElementById("informacion").innerHTML=`
                         <h1><span>Reuse</span><br>${data[8].reuse_count}</h1></br>
                                     <h1><span>Landings in water</span> <br>${data[8].water_landings}</h1><br>
                                            <h1><span>Landings on Earth</span><br> ${data[8].land_landings}</h1><br>
                                        <h1><span>Update<br></span> ${data[8].last_update}</h1><br>
                                               <h1><span>Serial<br></span> ${data[8].serial}</h1><br>
                                      `
                                  document.getElementById("imagen").innerHTML=`
                                   <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
                              const url = "https://api.spacexdata.com/v4/capsules"
                            
                              fetch(url)
                            
                              .then(res=>res.json())
                              .then(data=> {
                                  console.log(data);
                                  document.getElementById("titulo").innerHTML= `<h1 id="capsule1">Capsules</h1>
                                  ${data[0].title}
                                  `
                                  document.getElementById("informacion").innerHTML=`
                             <h1><span>Reuse</span><br>${data[9].reuse_count}</h1></br>
                                         <h1><span>Landings in water</span> <br>${data[9].water_landings}</h1><br>
                                                <h1><span>Landings on Earth</span><br> ${data[9].land_landings}</h1><br>
                                            <h1><span>Update<br></span> ${data[9].last_update}</h1><br>
                                                   <h1><span>Serial<br></span> ${data[9].serial}</h1><br>
                                          `
                                      document.getElementById("imagen").innerHTML=`
                                       <img class="Capsule1" src="/img/capsule1.jpg" alt="">
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
                
                                                