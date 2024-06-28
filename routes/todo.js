const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'iammunak12',
  database: 'todo'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define a route to fetch all todos
router.get('/', (req, res) => {
  const query = 'SELECT * FROM todos';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Define other routes (POST, PUT, DELETE) similarly

module.exports = router;
