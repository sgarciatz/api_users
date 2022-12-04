'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.login = function login (req, res, next, username, password) {
  User.login(username, password)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.usersBanUserIdPUT = function usersBanUserIdPUT (req, res, next, userId, banFlag) {
  User.usersBanUserIdPUT(userId, banFlag)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.usersFilterByNameGET = function usersFilterByNameGET (req, res, next, username) {
  User.usersFilterByNameGET(username)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.usersLogoutGET = function usersLogoutGET (req, res, next) {
  User.usersLogoutGET()
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 401);
    });
};

module.exports.usersRegisterPOST = function usersRegisterPOST (req, res, next, body) {
  User.usersRegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.usersUserIdDELETE = function usersUserIdDELETE (req, res, next, userId) {
  User.usersUserIdDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.usersUserIdGET = function usersUserIdGET (req, res, next, userId) {
  User.usersUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.usersUserIdPUT = function usersUserIdPUT (req, res, next, body, userId) {
  User.usersUserIdPUT(body, userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
