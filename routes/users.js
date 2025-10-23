const express = require('express');
const router = express.Router();

// Simple in-memory user storage; later integrate with DB
const users = [];

// Register new user
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  // Check if username already exists
  const existing = users.find(u => u.username === username);
  if (existing) {
    return res.status(409).json({ message: 'Username already exists' });
  }
  const newUser = { username, email, password, habits: [] };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Login user
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful', user });
});

// Get user profile page
router.get('/:username', (req, res) => {
  const { username } = req.params;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ username: user.username, habits: user.habits });
});

module.exports = router;
