'use strict';


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
    examples['application/json'] = [ {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : [ {
    "users" : "[100,200,300]"
  }, {
    "users" : "[100,200,300]"
  } ],
  "ownerId" : 100,
  "serverId" : 1,
  "status" : "RUNNING"
}, {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : [ {
    "users" : "[100,200,300]"
  }, {
    "users" : "[100,200,300]"
  } ],
  "ownerId" : 100,
  "serverId" : 1,
  "status" : "RUNNING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

