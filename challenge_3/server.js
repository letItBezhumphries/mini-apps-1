const express = require('express');
const path = require('path');
var session = require('express-session')


var bodyParser = require('body-parser');
var PORT = 3001;

var app = express();

/************* database **********************************/

var createUserAccout = require('./models/index');
var updateUser = require('./models/index');

/************* middleware **********************************/

app.use('/', function(req, res, next) {
  console.log("hi from middleware");
  next();
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set({"content-Type": "application/json"});

app.use(session({
  secret: 'coffee_now_andAlways',
  resave: false,
  saveUninitialized: true
}));

/************* routes **********************************/

app.listen(PORT, ()=> console.log(`app is listening on port ${PORT}`));



app.post('/users', function(req, res) {

  let user = JSON.parse(Object.keys(req.body)[0]);




})



// app.get('/', function(req, res) {
//   console.log('checkout has been hit!')
// })

// app.post('/login')

// app.get('/signup', function(req, res) {
//   console.log('login');
// });

// app.get('/shipping', function(req, res) {
//   console.log('shipping info');
// });


// app.get('/billing', function(req, res) {
//   console.log('billing');
// });

// app.get('/confirmation', function(req, res) {
//   console.log('confirmation')
// })












