console.log('this is loaded');


// exports id and secret for spotify api , we can use module.exports, module.exports.spotify too.
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

