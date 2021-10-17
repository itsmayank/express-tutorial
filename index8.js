// Serving Static files

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("I am at the home page")
});

app.use('/login', express.static(__dirname+"/public"));

app.listen(3000, () => {
    console.log(`Server is running.... `)
});

