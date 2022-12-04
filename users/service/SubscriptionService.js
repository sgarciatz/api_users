'use strict';


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
    examples['application/json'] = "Current subscription plan cancelled.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "MID-END Hardware.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
exports.usersUserIdSubscriptionTierPUT = function(userId,newSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Changed subscription plan from MID-END to HIGH-END hardware.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

