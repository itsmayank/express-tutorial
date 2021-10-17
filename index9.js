// POST requests with body-parser

const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registration", (req, res) => {
    console.log(req.body);
    res.send("Registration successful");
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});