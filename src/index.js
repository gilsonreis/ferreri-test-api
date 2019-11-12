const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require("./app/controllers/IdeaController")(app);

app.listen(3001);