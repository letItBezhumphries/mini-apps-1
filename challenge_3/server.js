const express = require('express');
const path = require('path');

var bodyParser = require('body-parser');
var PORT = 3001;
var app = express();
var multer = require('multer');
var upload = multer();

var session = require('express-session');

/************* database **********************************/

var User = require('./db/index')



/************* middleware **********************************/

app.use('/', function(req, res, next) {
  console.log("hi from middleware");
  next();
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  secret: 'coffee_now_andAlways',
  resave: false,
  saveUninitialized: true
}));


/************* routes **********************************/

app.listen(PORT, ()=> console.log(`app is listening on port ${PORT}`));

app.post('/', upload.none(), function(req, res) {
  var userData = req.body
  var fields = Object.keys(req.body);
  console.log(fields);
  //using the email as unique validation for user account 
  if (!req.session.email) {
    req.session.name = userData.name;
    req.session.email = userData.email;
    User.create(userData, { fields: [ userData.name, userData.email, userData.password ]}).then(() => {
      console.log('User created!')
    });
  } else {
    //they have a req.session.email and we need to update only the fields/keys in the req.body
    User.update(userData, {field: fields }).then(() => {
      console.log('User update', fields);
    });
    if (req.session.billing_zip) {
      req.session.destroy();
    }
  }  


  res.end()
});
