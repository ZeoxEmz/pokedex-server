const server = require("./src/server")
const { database } = require("./src/db")
const port = 3001

database.sync({force:true}).then(()=>{
    server.listen(port,()=>{
        console.log(`server listen in port ${port}`)
    })
}).catch(error=>console.log(error.message));