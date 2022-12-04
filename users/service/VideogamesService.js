'use strict';


/**
 * Fetch all the videogames the user has purchased.
 *
 * userId Integer The identifier of the user querying the API.
 * returns List
 **/
exports.usersUserIdVideogamesGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "gameId" : 1,
  "videogame-name" : "God Of War",
  "genre" : "Fantasia",
  "files" : "images,configuration files, design files"
}, {
  "gameId" : 1,
  "videogame-name" : "God Of War",
  "genre" : "Fantasia",
  "files" : "images,configuration files, design files"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

