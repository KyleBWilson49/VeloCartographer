var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _users = {};
var UsersStore = new Store(AppDispatcher);

UsersStore.all = function () {
  return _users;
};

UsersStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.RECIVE_ALL_USERS:
      updateUsers(payload.users);
      break;
  }
};

var updateUsers = function (users) {
  _users = users;
  UsersStore.__emitChange();
};

module.exports = UsersStore;
