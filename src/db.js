require("dotenv").config()
const {Sequelize} = require("sequelize")
const { USER, PASS, BDD, DB_DEPLOY } = process.env
const PokemonModel = require("./models/pokemon")
const TypeModel = require("./models/type")

const database = new Sequelize(DB_DEPLOY,{
    logging:false,
    native:false,
    dialectOptions:{
        ssl:{
            require:true
        }
    }
})

PokemonModel(database)
TypeModel(database)

const {Pokemon,Type} = database.models

Pokemon.belongsToMany(Type,{through:"pokemonType"})
Type.belongsToMany(Pokemon,{through:"pokemonType"})

module.exports = {...database.models,database}
