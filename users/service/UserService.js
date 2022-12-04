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
 * Submit the username and password to log in the aplication
 * Submit the username and password to log in the aplication
 *
 * username String The name of an user.
 * password String The password of the user.
 * returns String
 **/
exports.login = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.username === username && user.password === password)) {
      examples['text/plain'] = 'User logged in.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'Username and/or password are incorrect.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Ban or unban an user depending on the value of banFlag
 *
 * userId Integer The identifier of an user.
 * banFlag Boolean Flag to ban (true) or unban (false) an user
 * returns String
 **/
exports.usersBanUserIdPUT = function(banFlag, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let banStatus = banFlag ? 'banned' : 'unbanned';
    if (users.some(user => user.userId === userId)) {
      examples['text/plain'] = 'User ' + banStatus + '.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'User not found.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Return all users that match the optional filter.
 *
 * username String The string to filter by username. (optional)
 * returns List
 **/
exports.usersFilterByNameGET = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let userList = users.filter(user => user.username === username);
    if (userList) {
      examples['application/json'] = userList;
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'User not found.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Log out of the account currently logged in.
 * Log out of the account currently logged in.
 *
 * returns String
 **/
exports.usersLogoutGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Successful log out.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit a form full of information about the user
 * The user fill the fields of a form that will be used and validated to create a new account.
 *
 * body User  (optional)
 * returns String
 **/
exports.usersRegisterPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (!users.some(user => user.username === body.username)) {
      examples['text/plain'] = 'Correctly registered user.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'This account already exists.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Delete an user given its ID.
 *
 * userId Integer The identifier of an user.
 * returns String
 **/
exports.usersUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === userId)) {
      examples['text/plain'] = 'User deleted.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'User not found.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Return a user by its ID.
 *
 * userId Integer The identifier of an user.
 * returns User
 **/
exports.usersUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    let user = users.find(user => user.userId === userId);
    if (user) {
      examples['application/json'] = user;
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'User not found.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Modify an user given its ID.
 *
 * body User  (optional)
 * userId Integer The identifier of an user.
 * returns String
 **/
exports.usersUserIdPUT = function(body, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === userId)) {
      examples['text/plain'] = 'User modified.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'User not found.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

