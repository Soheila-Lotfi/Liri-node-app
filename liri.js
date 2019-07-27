// ----------------- access keys -------------------------
// add code to read and set any environment variables with the dotenv package:
  require("dotenv").config();

//  Add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");
console.log(keys);

// You should then be able to access your keys information like so
var spotify = keys.spotify;
console.log(spotify);

// ---------------- import package -------------


var axios = require("axios");


// node liri.js concert-this <artist/band name here,  this command will search the bands in town artist events api for an artist and 
// render some information about each event to the terminal

var operand= process.argv[2];
var artist;
var queryUrl;

if (operand==="concert-this"){
    artist=process.argv[3];
    queryUrl="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(function(response){

       for (i=0; i<response.data.length;i++){

        console.log("Name of the venue: "+response.data[i].venue.name);
         console.log("venue location: "+response.data[i].venue.city+","+response.data[0].venue.country);
         console.log("Date of the event: "+response.data[i].datetime);
         console.log("-------------------------------");
       }
         
    });

} 




