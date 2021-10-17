// Middleware part2 (Router Specific)

const express = require('express');
const app = express();

// TODO: part1
app.get("/admin", (req, res) => {
    res.send("This is admin");
});
// part1 end here

// TODO: part2

const admin = (req, res) => {
    res.send("This is admin dashboard");
};
app.get("/admin", admin);

// TODO: part3

const isAdmin = (req, res) => {
    res.status(401).send("You are not authorized");
    res.end();
}
app.get("/admin", isAdmin, admin);

app.listen(3000, () => {
    console.log(`Server is running.... `)
});

