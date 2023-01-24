const express = require("express");
const router = express.Router();
const userData = require("../server/msgModel");

// Route configuration
router.route("/create").post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const newUserData = new userData({
        name,
        email,
        message
    })

    newUserData.save();
})

module.exports = router;