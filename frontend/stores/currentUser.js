var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _currentUser = {};
var _message = '';
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.user = function () {
  return _currentUser;
};

CurrentUserStore.message = function () {
  return _message;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.CURRENT_USER:
      resetCurrentUser(payload.user);
      break;
    case WorkoutConstants.UPDATE_USER:
      resetCurrentUser(payload.user);
      resetMessage(payload.message);
      break;
    case WorkoutConstants.LOGGED_OUT:
      logOut();
      break;
  }
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
  CurrentUserStore.__emitChange();
};

module.exports = CurrentUserStore;
