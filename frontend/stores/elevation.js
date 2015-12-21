var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _elevations = {};
var ElevationStore = new Store(AppDispatcher);

ElevationStore.elevations = function () {
  return _elevations;
};

ElevationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.RECIVE_ELEVATION_DATA:
      updateElevations(payload.data);
      break;
    case WorkoutConstants.RESET_CHART:
      resetElevation();
      break;
  }
};

var updateElevations = function (elevation) {
  _elevations = elevation;
  debugger
  ElevationStore.__emitChange();
};

var resetElevation = function () {
  _elevations = {};
  ElevationStore.__emitChange();
};

module.exports = ElevationStore;
