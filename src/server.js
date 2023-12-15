const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./routes");
const morgan = require("morgan");

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {

    res.header('Content-Type', 'application/json; charset=utf-8');

    // Permite el acceso desde el dominio específico
    res.header('Access-Control-Allow-Origin','*');

    // Permite el acceso de credenciales en las solicitudes
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
});

server.use("/", router);

module.exports = server;
