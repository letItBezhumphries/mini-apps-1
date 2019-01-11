
const express = require('express');
const parser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/client'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))

app.get('/', function(req, res) {
  console.log('in the get')

});

app.set("Allowed: application/json");

app.post('/', function(req, res) {
  console.log("in the post", req.body);
  
  res.send();
})


app.listen(PORT, ()=> console.log(`app is listening on port ${PORT}`));

//report generation logic// 

var handleIncomingObjects = function() {

}

var getAllTableColumnKeys = function(obj) {
  //grab the keys   
}

var getAllTableColumnValues = function(obj) {
  //grab all the values
}

var createTableModel = function(keys, values) {

}


var handleChildrenObjects = function(obj, children) {

}



/*The server must flatten the JSON hierarchy, all the keys are the first line
  //grab the keys from the first object   and add it to a injection string followed by a comma
  "firstName," 
  //grab the values with Object.values()
  //handle case for a value that is an array /children

  //iterate over the children

grab an object  
mapping each item/object in the JSON to a single line of CSV report


function to handle the Object keys   
  the keys of the JSON objects will be the columns of the CSV report.
  keep hiearchy in mind 
  
In other words, all sibling records at a particular level of the hierarchy 
will have the same set of properties, 


but child objects might not contain the same properties. 
In all cases, every property you encounter must be present in the final CSV output.


You may also assume that child records in the JSON will always be in a property called `children`.
*/

/*
The response from the server should contain the CSV report along with the form so the user 
can keep submitting indefinitely, without having to go back to the "form page"
*/


/* 
Template function
*/


module.exports.app = app;
