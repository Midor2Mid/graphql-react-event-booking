const feathers = require('@feathersjs/feathers');
const bodyParser = require('body-parser');
const express = require('@feathersjs/express');

const app = express(feathers());;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send("Hello")
});

app.listen(3000);