
function mostrarDatos(){
    fetch("https://api.spacexdata.com/v4/capsules")
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
      
        document.getElementById("titulo").innerHTML= `
        ${data[0].name}
        `
        
        document.getElementById("informacion").innerHTML=`
        <h1><span>Reutilizacion</span><br>${data[0].reuse_count}</h1></br>
         <h1><span>Aterrizajes en agua</span> <br>${data[0].water_landings}</h1><br>
                <h1><span>Aterrizajes en la tierra</span><br> ${data[0].land_landings}</h1><br>
                <h1><span>Actualizacion<br></span> ${data[0].last_update}</h1><br>
                    <h1><span>Serial<br></span> ${data[0].serial}</h1><br>
            
                `
            document.getElementById("imagen").innerHTML=`
            <img id="falcon1" src="${data[0].flickr_images[0]}" alt="nhgy">
             <img id="falcons" src="${data[0].flickr_images[1]}" alt="nhgy">
              <img id="falcont" src="${data[0].flickr_images[2]}" alt="nhgy">
                <img id="falconc" src="${data[0].flickr_images[3]}" alt="nhgy">
              
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