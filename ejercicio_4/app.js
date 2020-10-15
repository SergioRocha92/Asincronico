  
const obtenerPokemon = require("./library");


obtenerPokemon("Pikachu").then(verPokemon => {
    verPokemon.abilities.forEach(habilidad => console.log("Pikachu: " + habilidad.ability.name));
}).catch((err)=>{
    console.log('Habilidad no encontrada');
});