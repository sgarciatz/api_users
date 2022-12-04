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
 * Cancels the actual cloud gaming subscription of the user.
 * Cancels the actual cloud gaming subscription of the user.
 *
 * userId Integer The identifier of an user.
 * returns String
 **/
exports.usersUserIdSubscriptionTierDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === userId)) {
      examples['text/plain'] = 'Current subscription plan cancelled.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Returns the type of subscriptionTier that the specified user currently has.
 * Returns the type of subscriptionTier that the specified user currently has.
 *
 * userId Integer The identifier of an user.
 * returns String
 **/
exports.usersUserIdSubscriptionTierGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let user = users.find(user => user.userId === userId)
    if (user) {
      examples['text/plain'] = user.subscriptionTier;
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Modifies the subscriptionTier of an user with the new value specified.
 * Modifies the subscriptionTier of an user with the new value specified.
 *
 * userId Integer The identifier of an user.
 * newSubscription String The new subscription plan of the user.
 * returns String
 **/
exports.usersUserIdSubscriptionTierPUT = function(newSubscription, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let user = users.find(user => user.userId === userId)
    if (user) {
      examples['text/plain'] = 'Changed subscription plan from ' + user.subscriptionTier + ' to ' + newSubscription + '.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "User not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

