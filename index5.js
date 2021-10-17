// Middleware Part1 (Global)

const express = require('express');
const app = express();

const myReqLogging = function(req, res, next) {
    console.log("New request made:");
    console.log(`Host: ${req.hostname}`);
    console.log(`Path: ${req.path}`);
    console.log(`Method: ${req.method}`);
    next();
}

app.use(myReqLogging);

app.get("/", (req, res) => {
    res.send("I am at the home screen")
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});

