const getDetailController = require("../controllers/getDetailController")

const getDetail = async (req,res)=>{
    console.log("hola")
    try {
        const {id} = req.params
        const detail =  await getDetailController({id})
        res.status(200).json(detail)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {getDetail}