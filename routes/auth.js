const express = require('express');
const router = express.Router();

router.get("/signout", (req, res) => {
    res.send("Signout successful");
});

module.exports = router;