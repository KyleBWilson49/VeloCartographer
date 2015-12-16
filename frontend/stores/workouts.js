var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _workouts = [];
var WorkoutStore = new Store(AppDispatcher);

WorkoutStore.all = function () {
  return _workouts.slice();
};

WorkoutStore.find = function (userId) {
  result = [];
  _workouts.forEach(function (workout) {
    if (workout.userId === userId) {
      result.push(workout);
    }
  });

  return result;
};

WorkoutStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.WORKOUTS_RECIEVED:
      resetWorkouts(payload.workouts);
      break;
    case WorkoutConstants.NEW_WORKOUT:
      addNewWorkout(payload.workout);
      break;
  }
};

var resetWorkouts = function (workouts) {
  _workouts = workouts;
  WorkoutStore.__emitChange();
};

var addNewWorkout = function (workout) {
  _workouts.push(workout);
  WorkoutStore.__emitChange();
};

module.exports = WorkoutStore;
