// Server response and status code

const express = require('express');
const app = express();

app.get("/user/:id/details", (req, res) => {
    res.json({
        name: 'Mayank Sharma',
        userId: '123',
        userRole: ['admin', 'user']
    });
});

app.listen(3000, () => {
    console.log(`Server is running.... `)
});

// res.status(404)
// res.json()
// res.redirect('/login')
// res.render()
// res.sendFile('/absolute/path/to/404.png')
// res.set('Content-Type', 'text/html')
// res.end()

// Please refer expressjs.com document for more details
