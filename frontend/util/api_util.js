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

  createWorkout: function (workout, callback) {
    $.ajax({
      url: "api/workouts",
      method: "POST",
      data: {workout: workout},
      success: function (workout) {
        ApiActions.receiveNewWorkout(workout);
        callback();
      }
    });
  },

  updateUser: function (changes, id) {
    $.ajax({
      url: "api/users/" + id,
      method: "PATCH",
      data: { user: changes },
      success: function (user) {
        ApiActions.updateCurrentUser(user);
      }
    });
  },

  logOut: function () {
    $.ajax({
      url: "/session",
      method: "DELETE",
      success: function () {
        ApiActions.loggedOut();
      }
    });
  },

  fetchCurrentUserTotals: function (id) {
    $.ajax({
      url: "/api/users/" + id,
      method: "GET",
      success: function (totals) {
          ApiActions.currentUserTotals(totals);
      }
    });
  }
};

module.exports = ApiUtil;
