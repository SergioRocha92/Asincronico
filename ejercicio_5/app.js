const obtenerPersonaFake = require("./library");

function robaridentidad(persona){
    let per = persona.results[0];
    console.log("Nombre: " + per.name.first);
    
    console.log("Sexo: " + per.gender);
    
    console.log("Pais: " + per.location.country+ " Estado: " + per.location.state+ " Ciudad: " + per.location.city+ " Calle: " + per.location.street.name+" "+ " Numero: " +
     per.location.street.number+ " Codigo postal: " +per.location.postcode);
    
     console.log("Correo: " + per.email);
    
    console.log("Usuario: " + per.login.username);
    
    console.log("Contraseña: " + per.login.password);
}



obtenerPersonaFake(robaridentidad);