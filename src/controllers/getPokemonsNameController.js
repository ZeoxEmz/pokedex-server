const axios = require("axios")
const pokeapi = require("../apiConfig")
const pokemonCleaner = require("../utils/pokemonCleaner")

const getPokemonsNameController = async ({name})=>{
    const response = await axios.get(`${pokeapi.defaults.baseURL}/${name}`)
    const infoClean = pokemonCleaner(response.data)
    return infoClean
}

module.exports = getPokemonsNameController