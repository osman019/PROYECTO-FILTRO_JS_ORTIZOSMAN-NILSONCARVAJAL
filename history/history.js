function mostrarDatos(){
    fetch("https://api.spacexdata.com/v4/history")
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
      
        document.getElementById("titulo").innerHTML= `
        ${data[1].title}
        `
        
        document.getElementById("informacion").innerHTML=`
        <h1><span>Date</span><br>${data[0].event_date_utc}</h1></br>
   
                <h1><span>Details</span><br> ${data[3].details}</h1><br>
                
    
              
                `
          
                document.getElementById("links").innerHTML=`
              <div id="links">
    <a id="link1"href="${data[0].links.article}">Website</a>
            </div>
                      
                        `
                  
                        document.getElementById("imagen").innerHTML=`
                       <img id="vuelo" src="/img/vuelo-espacial.jpg" alt="">
                        `
      
        
    })
    
    
    }