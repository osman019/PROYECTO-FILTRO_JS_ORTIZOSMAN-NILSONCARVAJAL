const conP = document.getElementById("contenedor");

fetch("https://api.spacexdata.com/v4/company")
.then(res => res.json())
.then(companyDatos=>{
  conP.innerHTML = `
  <div id="contPart1">
            <div class="name">SpaceX</div>
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
                </div>
  <div id="pruebas"> <span class="value">Valuation</span> <img src="/img/bicoinp.png"  class="valuation"> <div id="textValuation">${companyDatos.valuation}</div></div>
            </div>
  `  
})