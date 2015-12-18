var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _totals = {};
var CurrentUserTotalsStore = new Store(AppDispatcher);

CurrentUserTotalsStore.totals = function () {
  return _totals;
};

CurrentUserTotalsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.CURRENT_USER_TOTALS:
      updateTotals(payload.info);
      break;
  }
};

var updateTotals = function (info) {
  _totals = info.totals;
  CurrentUserTotalsStore.__emitChange();
};

module.exports = CurrentUserTotalsStore;
