// Modules
const express = require('express')
const jwt = require('jsonwebtoken');
const path = require('path')
const router = express.Router();

// Get credentials from environment
let username = process.env.CREDENTIALS_USERNAME
let pincode = process.env.CREDENTIALS_PINCODE

// Send JWT in exchange for correct credentials
router.post('/login', (req, res) => {
        try {
            const user = (username === req.body.username);
            if (!user) {
                res.status(400).json("Bad credentialsa");
            } 
            if (!(pincode === req.body.pincode)) {
                res.status(400).json( "Bad credentialss" );
            }
            if (pincode === req.body.pincode) {
                const tokenPayload = {
                  name: username,
                };
                const accessToken = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES});
                console.log(accessToken)
                res.status(200).json({
                    status: 'success',
                    message: 'User Logged In!',
                    data: {
                      accessToken,
                    },
                  });
            }
        } catch (err) {
            res.status(400).json("Internal server error");
        }
});

module.exports = router;