// Handle 404 Responses

const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(404).send("Sorry con't find that!!!");
    next();
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});
