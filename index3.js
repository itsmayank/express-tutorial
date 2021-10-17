// fetch information from query params

const express = require('express');
const app = express();

app.get("/user/:id", (req, res) => {
    res.send(req.params);
});

app.get("/user/:id/status/:status_val", (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});
