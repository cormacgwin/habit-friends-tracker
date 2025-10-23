const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Habit Tracker API');
});

// placeholder for getting all habits
app.get('/habits', (req, res) => {
  res.json([]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
