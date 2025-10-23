const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Import route modules
const userRoutes = require('./routes/users');
const habitRoutes = require('./routes/habits');
const competitionRoutes = require('./routes/competitions');

// Mount routes
app.use('/users', userRoutes);
app.use('/habits', habitRoutes);
app.use('/competitions', competitionRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Habit Tracker API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
