var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchWorkouts: function () {
    $.ajax({
      url: "api/workouts",
      success: function (workouts) {
        ApiActions.receiveAll(workouts);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      success: function (currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
      }
    });
  },

  createWorkout: function (workout) {
    $.ajax({
      url: "api/workouts",
      method: "POST",
      data: {workout: workout},
      success: function (workout) {
        ApiActions.receiveNewWorkout(workout);
      }
    });
  },

  updateUser: function (changes, id) {
    $.ajax({
      url: "api/users/" + id,
      method: "PATCH",
      data: { user: changes },
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      }
    });
  }
};

module.exports = ApiUtil;
