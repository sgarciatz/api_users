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
  "videogames" : [ 100, 200, 300 ]
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
  "videogames" : [ 100, 300 ]
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

const servers= [ {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : {
    "users" : [100, 200, 300]
  },
  "ownerId" : 100,
  "serverId" : 100,
  "status" : "RUNNING"
}, {
  "server-name" : "Ark-server",
  "serverSpecs" : "HIGH-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : {
    "users" : [100, 200]
  },
  "ownerId" : 100,
  "serverId" : 200,
  "status" : "RUNNING"
}, {
  "server-name" : "Outward-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : {
    "users" : [200]
  },
  "ownerId" : 200,
  "serverId" : 300,
  "status" : "RUNNING"
} ];

/**
 * Returns all the servers the user has created.
 * Returns all the servers the user has created.
 *
 * userId Integer The user's identifier.
 * returns List
 **/
exports.usersUserIdServersGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let user = users.find(user => user.userId === userId);
    if (user) {
      examples['application/json'] = servers.filter(server => user.servers.some(userServer => userServer === server.serverId));
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

