const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var PORT = 3001;
var app = express();
var multer = require('multer');
var upload = multer();

/************* database **********************************/
var connection = require('./db/index').connection;



/************* middleware **********************************/

app.use('/', function(req, res, next) {
  console.log("hi from middleware");
  next();
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));


/************* routes **********************************/

app.listen(PORT, ()=> console.log(`app is listening on port ${PORT}`));

app.post('/', upload.none(), function(req, res) {
  var user = [];
  var userData = req.body
  bcrypt.hash(userData.password, 0, function(err, hash) {
    if (err) throw err;
    user.password = hash;
    console.log(user.password)
  });

  var queryString = `insert into user(name, email, password, address, suite, city, state, zip, phone, card, expiry, cvv, billing_zip) 
                values(${obj.name}, ${obj.email}, ${user.password}, ${obj.address}, ${obj.suite}, ${obj.city}, ${obj.state}, ${obj.zip}, 
                ${obj.phone}, ${obj.card}, ${obj.expiry}, ${obj.cvv}, ${obj.billing_zip})`;
  
  connection.query(queryString, function(error, results) {
    if(error){
      console.log("there was an error in mysql string", error);
    } else {
      console.log("success you created a user", results)
    }
  });
  res.end()
});
