var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _currentUser = {};
var _followings = {};
var _message = '';
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.user = function () {
  return _currentUser;
};

CurrentUserStore.message = function () {
  return _message;
};

CurrentUserStore.followings = function () {
  return _followings;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.CURRENT_USER_INFO:
      updateFollowings(payload);
      resetCurrentUser(payload.user);
      break;
    case WorkoutConstants.UPDATE_USER:
      resetCurrentUser(payload.user);
      resetMessage(payload.message);
      break;
    case WorkoutConstants.LOGGED_OUT:
      logOut();
      break;
    case WorkoutConstants.CURRENT_USER_TOTALS:
      updateFollowings(payload.info);
      break;
    case WorkoutConstants.ADD_FOLLOWINGS:
      addFollowing(payload.following);
      break;
    case WorkoutConstants.REMOVE_FOLLOWING:
      removeFollowing(payload.following);
      break;
  }
};

var removeFollowing = function (following) {
  var idx = -1;
  _followings.forEach(function (follow, i) {
    if (follow.id === following.id) {
      idx = i;
    }
  });

  if (idx >= 0) {
    _followings.splice(idx, 1);
  }
  CurrentUserStore.__emitChange();
};

var addFollowing = function (following) {
  _followings.push(following);
  CurrentUserStore.__emitChange();
};

var updateFollowings = function (followings) {
  _followings = followings.followings;
  CurrentUserStore.__emitChange();
};

var resetCurrentUser = function (user) {
  _currentUser = user.currentUser ? user.currentUser : {};
  CurrentUserStore.__emitChange();
};

var resetMessage = function (message) {
  _message = message;
  CurrentUserStore.__emitChange();
};

var logOut = function () {
  _currentUser = {};
  // CurrentUserStore.__emitChange();
};

module.exports = CurrentUserStore;
