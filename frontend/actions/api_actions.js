var AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

ApiActions = {
  receiveAll: function (workouts) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUTS_RECIEVED,
      workouts: workouts
    });
  },

  receiveCurrentUser: function (currentUserInfo) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.CURRENT_USER_INFO,
      user: currentUserInfo.user,
      totals: currentUserInfo.totals,
      followings: currentUserInfo.followings
    });
  },

  receiveNewWorkout: function (workout) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.NEW_WORKOUT,
      workout: workout
    });
  },

  updateCurrentUser: function (data) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.UPDATE_USER,
      user: data,
      message: data.message
    });
  },

  loggedOut: function () {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.LOGGED_OUT
    });
  },

  currentUserTotals: function (info) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.CURRENT_USER_TOTALS,
      info: info
    });
  },

  userTotals: function (totals) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.USER_TOTALS,
      totals: totals
    });
  },

  addFollowing: function (following) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.ADD_FOLLOWINGS,
      following: following
    });
  },

  removeFollowing: function (following) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.REMOVE_FOLLOWING,
      following: following
    });
  }
};

module.exports = ApiActions;
