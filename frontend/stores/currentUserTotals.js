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
    case WorkoutConstants.UPDATE_TOTALS:
      updateTotals(payload.totals);
      break;
  }
};

var updateTotals = function (totals) {
  debugger
  _totals = totals;
  CurrentUserTotalsStore.__emitChange();
};

module.exports = CurrentUserTotalsStore;
