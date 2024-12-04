//// Api routes /api/status etc... ////

// Load modules
const express = require('express')
const router = express.Router();
const pinAuth = require('../middleware/pinAuth')

// Global variables (stateful)
var globalStatus = {
  statusmessage: 'Currently I am not working',
  longitude: null,
  latitude: null,
  mapmarker: 'none'
}

// Get status
router.get('/status', (req, res) => {
    res.send(globalStatus)

});
// Post status, check validity of JWT with pinAuth middleware
router.post('/status', pinAuth, (req, res) => {
  for (const [key, value] of Object.entries(req.body)) {
    globalStatus[key] = value
  }
  res.status(202).send(globalStatus)
});

module.exports = router;