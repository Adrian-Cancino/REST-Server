const express = require('express');
const cors = require('cors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //MIDDLEWARES
        this.middlewares();

        //APP ROUTES
        this.routes();
    };

    middlewares (){

        //CORS
        this.app.use( cors() );

        //READING AND PARSING BODY
        this.app.use( express.json() );

        //PUBLIC DIRECTORY
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.usersPath, require('../routes/user'));
    }   

    listen(){
        this.app.listen( this.port );
    }

};

module.exports = Server;