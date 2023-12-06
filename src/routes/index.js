const {Router} = require("express")
const { getPokemons } = require("../handlers/getPokemons")
const { getDetail } = require("../handlers/getDetail")
const router = Router()

router.get("/pokemons", getPokemons)
router.get("/pokemons/:id", getDetail)

module.exports = router