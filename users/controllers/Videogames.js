'use strict';

var utils = require('../utils/writer.js');
var Videogames = require('../service/VideogamesService');

module.exports.usersUserIdVideogamesGET = function usersUserIdVideogamesGET (req, res, next, userId) {
  Videogames.usersUserIdVideogamesGET(userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
