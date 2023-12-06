const axios = require("axios")
const pokeapi = require("../apiConfig")
const pokemonsCleaner = require("../utils/pokemonsCleaner")
const sortPokemons = require("../utils/sortPokemons")
const getAllPokemons = require("../utils/getAllPokemons")

const getPokemonsController = async ({offset,limit,ord, ordBy}) => {
    //Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

    try {
        let allpokemons = await getAllPokemons()
        let pokemons = [];

        // Ordenar los Pokémon si es necesario
        if (ord || ordBy) allpokemons = await sortPokemons({allpokemons, ord, ordBy });

        const pokemonsUrl = (offset || limit) ? allpokemons.slice(offset, limit ? limit:20) : allpokemons.slice(0, 20);

        const infoclean = pokemonsCleaner({pokemonsUrl});

        return infoclean;

    } catch (error) {
        console.error('Error al obtener la lista de Pokémon:', error);
        throw new Error('Error al obtener la lista de Pokémon');
    }

}
module.exports = getPokemonsController