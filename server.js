const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost', // Corrected host
    user: 'root',
    password: '123456789',     
    database: 'indian_chefs'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index-server.html');
});

app.get('/api/chefs', (req, res) => {
    const query = 'SELECT * FROM indian_chefs';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
