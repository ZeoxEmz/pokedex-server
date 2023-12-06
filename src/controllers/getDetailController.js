const axios = require("axios")
const pokeapi = require("../apiConfig")
const pokemonCleaner = require("../utils/pokemonCleaner")

const getDetailController = async ({id})=>{
    const response = await axios.get(`${pokeapi.defaults.baseURL}/${id}`)
    const detail = pokemonCleaner(response.data)
    return detail
}

module.exports = getDetailController