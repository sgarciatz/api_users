'use strict';

var utils = require('../utils/writer.js');
var Server = require('../service/ServerService');

module.exports.usersUserIdServersGET = function usersUserIdServersGET (req, res, next, userId) {
  Server.usersUserIdServersGET(userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
