const express = require('express');
const router = express.Router();

// Get all competitions (timeline)
router.get('/', (req, res) => {
  // TODO: return competition timeline
  res.send({ competitions: [] });
});

// Create a new competition (admin)
router.post('/', (req, res) => {
  // TODO: create a new competition based on request body
  res.send({ message: 'Competition creation not implemented yet.' });
});

module.exports = router;
