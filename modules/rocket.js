const API = "https://api.spacexdata.com/v4/rockets";

const HTMLResponse = document.querySelector("item1"); 


fetch(`${API}/height`)
.then((response) => response.json())
.then((payload_weights) =>{
    const tlp = height.map((name) => `<li>${payload_weights.name}</li>`);

});