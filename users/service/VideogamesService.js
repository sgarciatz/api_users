'use strict';

const users = [ {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "servers" : [ 100, 200 ],
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "HIGH-END Hardware",
  "email" : "juanito.diaz@email.com",
  "friends" : [ 200, 300 ],
  "username" : "Juanito_2000",
  "videogames" : [ 100, 200 ]
}, {
  "firstName" : "Paco",
  "lastName" : "Hernández",
  "password" : "password1234",
  "servers" : [ 300 ],
  "phone" : "657098334",
  "userId" : 200,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "paco.hernandez@email.com",
  "friends" : [ 100 ],
  "username" : "pakito_123",
  "videogames" : [ 100 ]
}, {
  "firstName" : "Daniel",
  "lastName" : "Cambero",
  "password" : "password1234",
  "servers" : [ ],
  "phone" : "452670534",
  "userId" : 300,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "daniel.cambero@email.com",
  "friends" : [ 100 ],
  "username" : "dani_crk",
  "videogames" : [ 100 ]
} ];

const videogames = [ {
  "gameId" : 100,
  "videogame-name" : "God Of War",
  "genre" : "Fantasia",
  "files" : "images,configuration files, design files"
}, {
  "gameId" : 200,
  "videogame-name" : "Stardew Valley",
  "genre" : "RPG | Farming",
  "files" : "images,configuration files, design files"
} ];

/**
 * Fetch all the videogames the user has purchased.
 *
 * userId Integer The identifier of the user querying the API.
 * returns List
 **/
exports.usersUserIdVideogamesGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    let user = users.find(user => user.userId === userId);
    if (user) {
      examples['application/json'] = videogames.filter(videogame => user.videogames.some(userVideogame => userVideogame === videogame.gameId));
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

