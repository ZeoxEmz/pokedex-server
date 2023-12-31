const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./routes");
const morgan = require("morgan");

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use(helmet({
  contentSecurityPolicy: {
    directives: {
      'interest-cohort': ['()'],
    },
  },
}));

server.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.path.endsWith('.svg')) {
      res.set('Content-Type', 'image/svg+xml; charset=utf-8');
  }
    next();
});

server.use("/", router);

module.exports = server;
