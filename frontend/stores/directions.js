var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _directions = {};
var DirectionsStore = new Store(AppDispatcher);

DirectionsStore.directions = function () {
  return _directions;
};

DirectionsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.UPDATE_DIRECTIONS:
      updateDirections(payload.directions);
      break;
  }
};

var updateDirections = function (directions) {
  _directions = directions;
  DirectionsStore.__emitChange();
};

module.exports = DirectionsStore;
