// Middleware Handling 404

// TODO: Now you want to handle all the requests for which you have not defined routes and show them nice 404 error.
// This again can be achieved using Middleware 

const express = require('express');
const app = express();

// Put this at the end

app.use((req, res, next) => {
    console.log("Page not found");
    res.status(404).send("Page you are looking is not found");
    next();
})

app.listen(3000, () => {
    console.log(`Server is running.... `)
});

