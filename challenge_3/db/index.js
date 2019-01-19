var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
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

// var createUser = function(obj) {
//   var password = bcrypt.hash(obj.password);
  



// const isValidPassword = function(obj) {
//   var passwordToCheck = bcrypt.hash(obj.password);
//   queryString = `select password from User where name = ${obj.name}`;
//   bcrypt.compare(passwordToCheck, userPasswordFromDb, function(err, match) {
//     if(match) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// }


module.exports = connection