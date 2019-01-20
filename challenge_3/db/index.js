var mysql = require('mysql2');
var bcrypt = require('bcrypt-nodejs');
// Create a database connection and export it from this file.
// You will need to connect with the user "eric", 'chalon', 'checkout'
// and to the database "chat".
const Sequelize = require('sequelize')



var sequelize = new Sequelize('checkout2', 'eric', 'chalon', {
  host: "localhost",
  dialect: "mysql"
});

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  suite: {
    type: Sequelize.INTEGER
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  phone: {
    type: Sequelize.STRING
  },
  card: {
    type: Sequelize.STRING
  },
  expiry: {
    type: Sequelize.STRING
  },
  cvv: {
    type: Sequelize.INTEGER
  },
  billing_zip: {
    type: Sequelize.INTEGER
  }
})

User.sync()


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'eric',
//   password: 'chalon',
//   database: 'checkout'
// });

// connection.connect();

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


module.exports = User;