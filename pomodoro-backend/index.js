// index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // To allow requests from the React app
app.use(express.json());

let pomodoroSessions = 0;

app.get('/sessions', (req, res) => {
  res.json({ sessions: pomodoroSessions });
});

app.post('/sessions', (req, res) => {
  const { completed } = req.body;
  if (completed) {
    pomodoroSessions += 1;
    res.json({ message: 'Session recorded!', sessions: pomodoroSessions });
  } else {
    res.status(400).json({ error: 'Invalid data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

