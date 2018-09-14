
const PORT = process.env.PORT || 8080;

const express = require("express");
const session = require("express-session");
const RedisStore = require('connect-redis')(session);

const bodyParser = require('body-parser');
const cors = require("cors");
const proxy = require('express-http-proxy');

const {initConnection} = require("./db");
const {fillDb} = require("./db/fillDb");

const api = require("./api");

const app = express();
 
app.use(session({
    store: new RedisStore({host: "192.168.99.100", port: 6379 }),// store: new RedisStore({host: "localhost", port: 6379 }),
    secret: "shai",
    resave: false
}));

app.use(cors({ allowedHeaders: true, preflightContinue: true }));

app.use(bodyParser.json())

app.use("/api", api);

app.get('/*', proxy('http://localhost:4200'));

function startServer() {
    
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });

    require("./db/users");
}

initConnection()
    // .then(fillDb)
    .then(startServer)
    .catch(err => {
        console.error(err);
    })
