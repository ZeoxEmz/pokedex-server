const getPokemonsController = require("../controllers/getPokemonsController")
const getPokemonsNameController = require("../controllers/getPokemonsNameController")

const getPokemons = async (req,res)=>{
    try {
        const {name,offset,limit,ord,ordBy} = req.query
        console.log({name,offset,limit,ord,ordBy})
        const pokemons = name ? await getPokemonsNameController({name}) : await getPokemonsController({offset,limit,ord,ordBy})
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports = {getPokemons}