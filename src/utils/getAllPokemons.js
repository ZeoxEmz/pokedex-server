const axios = require("axios");
const pokeapi = require("../apiConfig");

const getAllPokemons = async ()=> {

        // Obtener el número total de Pokémon
        const { data } = await axios.get(pokeapi.defaults.baseURL);
        const allPokemons = data.count;
    
        // Obtener todos los Pokémon
        const response = await axios.get(`${pokeapi.defaults.baseURL}?limit=${allPokemons}`);
            
        return response.data.results
}

module.exports = getAllPokemons