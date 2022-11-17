const express = require("express");
const routes = require("../routes/index.js");
const cors = require("cors");

const server = express();

server.use(cors());
routes(server);

module.exports = server;
