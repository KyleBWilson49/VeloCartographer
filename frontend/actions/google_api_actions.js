var AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

GoogleApiActions = {
  setDirections: function (result, status) {
    if (status === "OK") {
      AppDispatcher.dispatch({
        actionType: WorkoutConstants.UPDATE_DIRECTIONS,
        directions: result
      });
    }
  },

  storeMarkers: function (markers) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.STORE_MARKERS,
      markers: markers
    });
  }
};

module.exports = GoogleApiActions;
