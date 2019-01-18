const express = require('express');
const parser = require('body-parser');
const multer = require('multer');

const upload = multer();
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const app = express();

app.use(express.static('/client'));
app.use(parser.urlencoded({extended:true}))
app.use(parser.json());


app.get('/', function(req, res) {
  console.log('in the get')
});

app.set({"content-type": "application/json"})

app.get('/upload', function(req, res) {
  ///from filePicker input?
})

var fileNameId = 1;

app.post('/upload', function(req, res, ) {  
  var formData = JSON.parse(req.body.csv);
  var nestArray = gatherTableTextElements(flattenJSONObject(formData));
  var reportText = generateCSVReportToWriteFile(nestArray, []);
  
  var tableHeaders = createHTMLTableHeaderRow(nestArray.shift());
  var tableTemplate = createHTMLTableData(nestArray, tableHeaders);
  
  fileNameId += 1;
  //increment fileNameId and attach it to end of fileNamePath 
  //writing files to csvReports folder
  var fileNamePath = '/reports/' + fileNameId.toString() + '.csv'; 
  fs.writeFile('/client' + fileNamePath, reportText, 'utf8', function(err) {
    if(err) {
      console.log('error occurred trying to write file', err);
    } else {
      res.send(renderReportView(reportText, tableTemplate));
    }
  });

})


app.listen(PORT, ()=> console.log(`app is listening on port ${PORT}`));

/*
Flatten the JSON data -- it takes the json object and returns an array of object and children as elements
 */
function flattenJSONObject(obj) {
  var results = [];
  results.push(obj);
  if(obj.children.length > 0) {
    obj.children.forEach(function(node) {
      results = results.concat(flattenJSONObject(node));
    }); 
  }
  return results; 
}

function gatherTableTextElements(array) {
  var queue = [];
  //grab the table headers from the first element in the array
  queue.push(Object.keys(array[0]).slice(0,6));
  //iterate over each object in the array and push the values from each object
  
  for(var i = 0; i < array.length; i++) {
    queue.push(Object.values(array[i]).slice(0,6));
  }
  return queue;
}

var createNewLine = function(array, str) {
  str += array.join(',');
  return str;
}

function generateCSVReportToWriteFile(nestedArray, output) {
  var line;
  for(var i = 0; i < nestedArray.length; i++) {
    line = createNewLine(nestedArray[i], "");
    output.push(line);
  }
  return output.join("/n");
}

/**
 * 
 * 
 */


/*
The response from the server should contain the CSV report along with the form so the user 
can keep submitting indefinitely, without having to go back to the "form page"
*/

//report generation logic// 
function generatePage(csvReport) {
  console.log(csvReport);
  return ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>CSV Report Generator</title>
      
    </head>
    <body>
      <form id="json-csv" method="POST" action="/upload">
        <input type="file">
        <textarea name="csv" class="report-field" type="submit" cols="25" rows="50"></textarea>
        <button class="form-submit">Submit</button>
      </form>
      <br/> 
      <div> 
        ${csvReport}
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="app.js"></script>
    </body>
  </html>
`
}

//iterate over each element in the nestedArray
//each element represents a new line of text to concatenate to string to write to file 
//each element also represent a new row of html elements that can be added to template string?

var renderReportView = function(fileString, htmlString) {

}


function createHTMLTableHeaderRow(array) {
  var row = `<tr>`; 
  array.map(function(item, index) {
    row += `<th scope="col">${item}</th>`
  });
  return row + `</tr>`;
}

function createHTMLTableData(nestedArray, headerStr) {
  var openingTableHTMLString = `<table>`;
  for(var i = 0; i < nestedArray.length; i++) {
    headerStr += createHTMLDataCellRow(nestedArray[i], `<tr>`);
  }
  return openingTableHTMLString + headerStr + `</table>`;
}

function createHTMLDataCellRow(array, rowStr) {
  array.map(function(item, index) {
    rowStr += `<td>${item}</td>`
  });
  return rowStr + `</tr>`
}

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


module.exports.app = app;
