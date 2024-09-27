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
        `
        document.getElementById("imagen").innerHTML=`
        <img id="falcon1" src="/img/falcon1.jpg" alt="">

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
mostrarDatos()
document.getElementById("PP").addEventListener("click",f11)
function f11(event){
fetch("https://api.spacexdata.com/v4/rockets")





}