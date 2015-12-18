var AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

GoogleApiActions = {
  setDirections: function (result, status) {
    console.log(status);
    if (status === "OK") {
      AppDispatcher.dispatch({
        actionType: WorkoutConstants.UPDATE_DIRECTIONS,
        directions: result
      });
    }
  }
};

module.exports = GoogleApiActions;
