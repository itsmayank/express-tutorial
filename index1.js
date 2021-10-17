// Simple get requests

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("I am at the home screen")
});

app.get("/about", (req, res) => {
    res.send("<h1>This is about page</h1>");
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});
