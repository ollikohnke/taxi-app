// Routes for frontend
const express = require('express')
const router = express.Router();
const path = require('path')

// To get root directory of root process (server.js)
let dist = path.join(process.cwd(), "dist_front")

// Serve static files (css and js)
router.use(express.static(dist));

// Server index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(dist, 'index.html'))
})

module.exports = router;