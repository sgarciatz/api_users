'use strict';

var utils = require('../utils/writer.js');
var Friend = require('../service/FriendService');

module.exports.usersUserIdFriendsDELETE = function usersUserIdFriendsDELETE (req, res, next, userId, unfriendUserId) {
  Friend.usersUserIdFriendsDELETE(userId, unfriendUserId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.usersUserIdFriendsGET = function usersUserIdFriendsGET (req, res, next, userId) {
  Friend.usersUserIdFriendsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.usersUserIdFriendsPOST = function usersUserIdFriendsPOST (req, res, next, userId, newFriendId) {
  Friend.usersUserIdFriendsPOST(userId, newFriendId)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
