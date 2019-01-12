var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static(__dirname, '/public'));



app.listen(PORT, ()=> console.log(`app is listening on port ${PORT}`));




/*
*********************** model ************************** 
managing of state
*/


/*
************************ views ************************** 
what the user sees 
how state is displayed 
*/




/* 
*********************** controller **********************
user interface --forms, buttons, event listener
*/