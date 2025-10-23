const express = require('express');
const router = express.Router();

// Get all habits for a user
router.get('/:username', (req, res) => {
  // TODO: return habit status for this user
  res.send({ habits: [] });
});

// Update or create habit completion for a user
router.post('/:username', (req, res) => {
  // TODO: update habit status based on request body
  res.send({ message: 'Habit update not implemented yet.' });
});

module.exports = router;
