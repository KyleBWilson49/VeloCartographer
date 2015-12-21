var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _directions = {};
var _distance = 0;
var DirectionsStore = new Store(AppDispatcher);

DirectionsStore.directions = function () {
  return _directions;
};

DirectionsStore.distance = function () {
  return _distance;
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
  _distance = directions.routes[0].legs[0].distance.value / 1609;
  DirectionsStore.__emitChange();
};

module.exports = DirectionsStore;
