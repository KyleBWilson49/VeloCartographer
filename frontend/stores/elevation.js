var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _elevations = {};
var ElevationStore = new Store(AppDispatcher);

ElevationStore.elvations = function () {
  return _elevations;
};

ElevationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.UPDATE_ELEVATION:
      updateElevations(payload.elevations);
      break;
  }
};

var updateElevations = function (elvation) {
  _elevations = directions;
  ElevationStore.__emitChange();
};

module.exports = ElevationStore;
