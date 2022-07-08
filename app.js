require('dotenv').config(); //ENVIRONMENT VARIABLES

const Server = require('./models/server');

const server = new Server();

server.listen();