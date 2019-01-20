const express = require('express');

var app = express();


app.use(express.static('./client/dist'));


const PORT = 3000;
//board is 7squares in width x 6squares in height

app.listen(console.log(`app is listening on ${PORT} `, PORT))