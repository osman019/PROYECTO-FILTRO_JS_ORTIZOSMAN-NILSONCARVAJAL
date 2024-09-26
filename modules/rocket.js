function mostrarDatos(done){


    const results = fetch("https://api.spacexdata.com/v4/rockets"){
        
    };
    

results
.then(response => response.json())
.then( data => {
    done(data)
});

mostrarDatos(data => {
    console.log(data);
});

}
