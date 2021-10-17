// POST requests

const express = require('express');
const app = express();

const authRouters = require('./routes/auth');

app.use('/api', authRouters);

app.listen(3000, () => {
    console.log(`Server is running.... `)
});
