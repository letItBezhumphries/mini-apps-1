
var csv = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
};

//create the text file grab 
//takes in a object of nested objects


var renderReportView = function(csvReport, reportTable) {

}

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


var gatherTableTextElements = function(array) {
  var queue = [];
  //grab the table headers from the first element in the array
  queue.push(Object.keys(array[0]).slice(0,6));
  //iterate over each object in the array and 
  for(var i = 0; i < array.length; i++) {
    queue.push(Object.values(array[i]).slice(0,6));
  }



  return queue;
}

// console.log(gatherTableTextElements(flattenJSONObject(csv)));

//iterate over each element in the nestedArray
//each element represents a new line of text to concatenate to string to write to file 
//each element also represent a new row of html elements that can be added to template string?

var nest = gatherTableTextElements(flattenJSONObject(csv));
var headers = createHTMLTableHeaderRow(nest.shift());

console.log(createHTMLTableData(nest, headers));



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


