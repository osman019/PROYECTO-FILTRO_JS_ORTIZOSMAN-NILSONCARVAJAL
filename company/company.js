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
                        <h2>Address - <span>${companyDatos.headquarters.address}</span></h1>
                        <h2>City - <span>${companyDatos.headquarters.city}</span></h1>
                        <h2>State - <span>${companyDatos.headquarters.state}</span></h1>
                    </div>
                </div>
  <div id="pruebas">Valuation <img src=""  class="valuation"> <div id="textValuation">${companyDatos.valuation}</div></div>
            </div>
  `  
})