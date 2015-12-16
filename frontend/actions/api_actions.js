var AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

ApiActions = {
  receiveAll: function (workouts) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUTS_RECIEVED,
      workouts: workouts
    });
  },

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.CURRENT_USER,
      user: currentUser
    });
  },

  receiveNewWorkout: function (workout) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.NEW_WORKOUT,
      workout: workout
    });
  }
};

module.exports = ApiActions;
