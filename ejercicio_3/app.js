const obtenerPokemon = require("./library");

function atrapapokemon(pokemon){
    console.log(pokemon.name); 
    console.log("Habilidades: ")
    pokemon.abilities.forEach(element => {
        console.log(element.ability.name);
        
    });
}

obtenerPokemon("charizard", atrapapokemon);