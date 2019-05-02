var express = require("express");
var app = express();
const router = express.Router();
const http = require('http');
const randomize = require("./randomize");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/data/:rounds', (req, res) => {
    let rounds = req.params.rounds || 1000;
    let output = randomize.generateData(rounds);
    res.send(output)
})
//Setting up server
const server = http.createServer(app);
server.listen(8888, () => {
    console.log(` Server started on port: ${server.address().port}`);
});