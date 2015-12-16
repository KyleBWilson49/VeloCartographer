var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _currentUser = {};
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.user = function () {
  return _currentUser;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.CURRENT_USER:
      resetCurrentUser(payload.user);
      break;
    case WorkoutConstants.UPDATE_USER:
      resetCurrentUser(payload.user);
      break;
  }
};

var resetCurrentUser = function (user) {
  _currentUser = user;
  CurrentUserStore.__emitChange();
};

module.exports = CurrentUserStore;
