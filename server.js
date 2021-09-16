//requirements and port connection
const mysql = require('mysql2');
const express = require('express');
const { createConnection } = require('mysql2/promise');
const PORT = process.env.PORT || 3001;
const app = express();

//express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mysql database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'frogulon',
        database: 'election'
    },
    console.log('Connected to the election database.'),
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

//catchall route
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});