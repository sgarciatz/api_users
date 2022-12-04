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

/**
 * Delete a friend from the friendlist
 *
 * userId Integer The identifier of the user querying the API.
 * unfriendUserId Integer The identifier of the user which is going to be removed from the friendlist
 * returns String
 **/
exports.usersUserIdFriendsDELETE = function(unfriendUserId, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let user = users.find(user => user.userId === userId);
    if (user) {
      let friend = user.friends.some(userFriend => userFriend === unfriendUserId);
      if (friend) {
        examples['text/plain'] = 'User removed from the friendlist.';
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        examples['text/plain'] = "User not found.";
        reject(examples[Object.keys(examples)[0]]);       
      }
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
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
    let user = users.find(user => user.userId === userId);
    if (user) {
      examples['application/json'] = users.filter(user2 => user.friends.some(userFriend => userFriend === user2.userId));
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
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
exports.usersUserIdFriendsPOST = function(newFriendId, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let user = users.find(user => user.userId === userId);
    if (user) {
      let friend = user.friends.some(userFriend => userFriend === newFriendId);
      if (friend) {
        examples['text/plain'] = 'User added to the friendlist.';
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        examples['text/plain'] = "User not found.";
        reject(examples[Object.keys(examples)[0]]);       
      }
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

