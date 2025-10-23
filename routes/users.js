const express = require('express');
const router = express.Router();

// Simple in-memory user storage; later integrate with DB
const users = [];

// Login or register (placeholder)
router.post('/login', (req, res) => {
  // TODO: implement authentication and registration
  res.send({ message: 'Login not implemented yet.' });
});

// Get user profile page
router.get('/:username', (req, res) => {
  const { username } = req.params;
  // TODO: fetch user data and habits
  res.send({ username, habits: [] });
});

module.exports = router;
