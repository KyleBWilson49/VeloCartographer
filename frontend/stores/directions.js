var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _directions = {};
var _distance = 0;
var _markers = [];
var DirectionsStore = new Store(AppDispatcher);

DirectionsStore.directions = function () {
  return _directions;
};

DirectionsStore.distance = function () {
  return _distance;
};

DirectionsStore.markers = function () {
  return _markers;
};

DirectionsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.UPDATE_DIRECTIONS:
      updateDirections(payload.directions);
      break;
    case WorkoutConstants.STORE_MARKERS:
      updateMarkers(payload.markers);
      break;
  }
};

var updateDirections = function (directions) {
  _directions = directions;
  _distance = directions.routes[0].legs[0].distance.value / 1609;
  DirectionsStore.__emitChange();
};

var updateMarkers = function (markers) {
  _markers = markers;
};

module.exports = DirectionsStore;
