const conP = document.getElementById("contenedor");

fetch("https://api.spacexdata.com/v4/company")
.then(res => res.json())
.then(companyDatos=>{
  conP.innerHTML = `
  <div id="contPart1">
            <div class="name">SpaceX</div>
           <img id="dance" src="/img/dance.gif" alt="">
            <div class="contMapFounder">
                <div id="founder">
                    <h2 class="fundador">Founder</h2>
                    <img src="/img/image.png" alt="" class="elonkimg">
                    <div id="elonkLetra">${companyDatos.founder}</div>
                </div>
    <div id="lugar">
                    <img src="" alt="" class="lugarSpaceX">
                    <div id="datosLugar">
                        <div class="divsion">
                            <h2 class="headquarters">Headquarters</h2>
                        </div>
                        <h1><span> Address - </span>${companyDatos.headquarters.address}</h1>
                        <h1><span> City - </span>${companyDatos.headquarters.city}</h1>
                        <h1><span>  State - </span>${companyDatos.headquarters.state}</h1>
                    </div>
                    <div class="info">
                    
                   <h1 class="information">Information </h1>
                    <h1> ${companyDatos.summary}</h1>
                    </div>
                </div>
  <div id="pruebas"> <span class="value">Valuation</span>  <div id="textValuation">${companyDatos.valuation}</div><img src="/img/dine.png"  class="valuation"></div>
            </div>
            <div id="links">
    <a id="link1"href="${companyDatos.links.website}">Website</a>
    <a id="link2" href="${companyDatos.links.flickr}">flickr</a>
    <a id="link3" href="${companyDatos.links.twitter}">twitter</a>
    <a id="link4" href="${companyDatos.links.elon_twitter}">elon_twitter</a>
</div>
          
  `  
})