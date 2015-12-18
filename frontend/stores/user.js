var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _userTotals = {};
var UserStore = new Store(AppDispatcher);

UserStore.totals = function () {
  return _userTotals;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.USER_TOTALS:
      updateTotals(payload.totals);
      break;
  }
};

var updateTotals = function (totals) {
  _userTotals = totals;
  UserStore.__emitChange();
};

module.exports = UserStore;
