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
      success: function (currentUserInfo) {
        ApiActions.receiveCurrentUser(currentUserInfo);
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
  },

  fetchUserTotals: function (id) {
    $.ajax({
      url: "/api/users/" + id,
      method: "GET",
      success: function (totals) {
        ApiActions.userTotals(totals);
      }
    });
  },

  followUser: function (id) {
    $.ajax({
      url: "/api/users/" + id + "/following",
      method: "POST",
      success: function (follow) {
        ApiActions.addFollowing(follow);
      }
    });
  },

  unfollowUser: function (id) {
    $.ajax({
      url: "/api/users/" + id + "/following",
      method: "DELETE",
      success: function (follow) {
        ApiActions.removeFollowing(follow);
      }
    });
  },

  createRoute: function (route) {
    $.ajax({
      url: "/api/routes",
      method: "POST",
      data: {route: route},
      success: function (route) {
        ApiActions.addRoute(route);
      }
    });
  },

  fetchRoutes: function () {
    $.ajax({
      url: "/api/routes",
      method: "GET",
      success: function (routes) {
        ApiActions.fetchedRoutes(routes);
      }
    });
  },

  showOldRoute: function (route) {
    ApiActions.showOldRoute(route);
  },

  removeRoute: function () {
    ApiActions.removeRoute();
  },

  fetchAllUsers: function () {
    $.ajax({
      url: "/api/users",
      method: "GET",
      success: function (users) {
        ApiActions.reciveAllUsers(users);
      }
    });
  }
};

module.exports = ApiUtil;
