// ----------------- access keys -------------------------
// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

//  Add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");
console.log(keys);

// You should then be able to access your keys information like so

// ---------------- import package -------------

var axios = require("axios");

// node-spotify-api package
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
console.log(spotify);

//------------ variables-------------

var operand = process.argv[2];
var artist;
var song = "The Sign";
var queryUrl;
var movieName = "Mr. Nobody";
//----------------------------- node liri.js concert-this <artist/band name command-------------
// node liri.js concert-this <artist/band name here,  this command will search the bands in town artist events api for an artist and
// render some information about each event to the terminal

if (operand === "concert-this") {
  artist = process.argv.slice(3).join(" "); // try Rod Stewart as an artist
  queryUrl =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  axios.get(queryUrl).then(function(response) {
    for (i = 0; i < response.data.length; i++) {
      console.log("Name of the venue: " + response.data[i].venue.name);
      console.log(
        "venue location: " +
          response.data[i].venue.city +
          "," +
          response.data[0].venue.country
      );
      console.log("Date of the event: " + response.data[i].datetime);
      console.log("-------------------------------");
    }
  });

  //-------------node liri.js spotfiy-this-song '<song name here>' command -----------------
  //// * This will show the following information about the song in your terminal/bash window
} else if (operand === "spotify-this-song") {
  if (process.argv[3]) {
    song = process.argv.slice(3).join(" ");
  }

  spotify.search({ type: "track", query: song }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    // console.log(JSON.stringify(data));
    // console.log(data.tracks);
    var obj = JSON.parse(JSON.stringify(data.tracks.items[2].album.name));
    console.log(obj);
  });
}
// ------------------`node liri.js movie-this '<movie name here>'--------------------------------
else if (operand === "movie-this") {
  if (process.argv[3]) {
    movieName = process.argv.slice(3).join(" ");
  }

  queryUrl = " http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

  axios.get(queryUrl).then(function(response) {
    console.log("Title: " + response.title);
    console.log("Year: " + response.year);
    console.log("IMDB Rating: " + response.imdbRaing);
    // console.log("IMDB Rating: " + response.imdbRaing);  ///rotten
    console.log("IMDB Rating: " + response.country);
    console.log("IMDB Rating: " + response.language);
    console.log("IMDB Rating: " + response.plot);
    console.log("IMDB Rating: " + response.actors);

    console.log("-------------------------------");
  });
}
