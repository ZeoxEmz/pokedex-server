const axios = require("axios")

const pokeapi = axios.create({
    baseURL : "https://pokeapi.co/api/v2/pokemon"
})

module.exports = pokeapi