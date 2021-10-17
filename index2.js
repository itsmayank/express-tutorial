// POST requests

const express = require('express');
const app = express();

app.post("/registration", (req, res) => {
    res.send("Registration successful");
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});