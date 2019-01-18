var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "eric", 'chalon', 'checkout'
// and to the database "chat".

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'eric',
  password: 'chalon',
  database: 'checkout'
});

connection.connect();



module.exports = connection;
