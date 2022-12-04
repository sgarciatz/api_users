'use strict';


/**
 * Delete a friend from the friendlist
 *
 * userId Integer The identifier of the user querying the API.
 * unfriendUserId Integer The identifier of the user which is going to be removed from the friendlist
 * returns String
 **/
exports.usersUserIdFriendsDELETE = function(userId,unfriendUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "User removed from the friendlist.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch all the friends of an user
 *
 * userId Integer The identifier of the user querying the API.
 * returns List
 **/
exports.usersUserIdFriendsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "servers" : [ 100, 200, 300 ],
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "juanito.diaz@email.com",
  "friends" : [ 100, 200, 300 ],
  "username" : "Juanito_2000",
  "videogames" : [ 100, 200, 300 ]
}, {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "servers" : [ 100, 200, 300 ],
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "juanito.diaz@email.com",
  "friends" : [ 100, 200, 300 ],
  "username" : "Juanito_2000",
  "videogames" : [ 100, 200, 300 ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new user to the friendlist.
 *
 * userId Integer The identifier of the user querying the API.
 * newFriendId Integer The identifier of the user that is going to be added to the friendlist.
 * returns String
 **/
exports.usersUserIdFriendsPOST = function(userId,newFriendId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "User added to the friendlist.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

