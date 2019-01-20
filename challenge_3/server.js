const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var PORT = 3001;
var app = express();
var multer = require('multer');
var upload = multer();

/************* database **********************************/
var User = require('./db/index')



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
  // bcrypt.hash(userData.password, 0, function(err, hash) {
  //   if (err) throw err;
  //   user.password = hash;
  //   console.log(user.password)
  // });
  User.create(userData).then(() => {
    console.log('User created!')
  });
  // var queryString = `insert into user(name, email, password) values(${userData.name}, ${userData.email}, ${userData.password})`;
  
  // connection.query(queryString, function(error, results) {
  //   if(error){
  //     console.log("there was an error in mysql string", error);
  //   } else {
  //     console.log("success you created a user", results)
  //   }

  res.end()
});
