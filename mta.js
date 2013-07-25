// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];
var sStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);



var trains = [lTrain, nTrain, sixTrain, gTrain];

while (startTrain != "q") {

var msg = "Which train would you \nlike to get on?\n" + displayLines() + "\n or quit";
var startTrain = prompt(msg);
console.log(startTrain);



function displayLines() {
  var trainNames = "";

  _.each(trains, function(train){
      trainNames += train.name;
  });

  return trainNames.trim();
}



function displayStations() {

  var stationNames = "";
  _.each(trains[startTrain].stations, function(station){
    stationNames += station + "\n";
    });
  return stationNames.trim();
  }


var msg2 = "Which station would you \nlike to get on?\n" + displayStations();
var startStation = prompt(msg2);
console.log(startStation);

/////////////////

var msg = "Which train would you \nlike to get off?\n" + displayLines();
var offTrain = prompt(msg);

function displayLines() {
  var trainNames = "";

  _.each(trains, function(train) {
    trainNames += train.name + "\n";
  });
  return trainNames.trim();
}


function displayOffStations() {
  var stationNames = "";
  _.each(trains[offTrain].stations, function(station){
    stationNames += station + "\n";
    });
  return stationNames.trim();
  }


var msg2 = "Which station would you \nlike to get off?\n" + displayOffStations();
var offStation = prompt(msg2);
console.log(offStation);


//intersection
function instersection(){
_.intersection(trains[startStation].stations, trains[offStation].stations);
}


// logging a journey //
function Journey(startLine, startStation, endLine, endStation) {
  this.startLine = startLine;
  this.startStation = startStation;
  this.endLine = endLine;
  this.endStation = endStation;
}


var journey = new Journey(startTrain, startStation, offTrain, offStation);

var journeys = [];

journeys.push(startTrain);

var totalSpent = "$" + (journeys.length * 2.50);

console.log(totalSpent);

// calculating distance //
if (startTrain === offTrain){
    alert(trains[startTrain].distance(startStation,offStation) + " stops.");
} else {
    var leg1 = Math.abs(trains[startTrain].distance(startStation, "Union Square"));
    var leg2 = Math.abs(trains[offTrain].distance(offStation, "Union Square"));
    var distance = Math.abs(leg1 + leg2);

    alert(distance + " stops.");
}

}









