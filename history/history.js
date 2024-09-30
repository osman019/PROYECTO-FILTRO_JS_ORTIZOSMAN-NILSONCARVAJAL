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
                
    
              
                `
          
                document.getElementById("links").innerHTML=`
              <div id="links">
    <a id="link1"href="${data[0].links.article}">Website</a>
            </div>
                      
                        `
                  
                        document.getElementById("imagen").innerHTML=`
                      
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