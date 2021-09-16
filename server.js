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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

//GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

//DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id =?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result)
// });

//Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//     VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//catchall route
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});