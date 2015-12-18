var React = require('react'),
    CurrentUserStore = require('../stores/currentUser'),
    WorkoutStore = require('../stores/workouts'),
    ApiUtil = require('../util/api_util'),
    CurrentUserTotalsStore = require('../stores/currentUserTotals');

var InfoPane = React.createClass({
  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.user(),
      currentUserTotals: CurrentUserTotalsStore.totals()
    };
  },

  componentDidMount: function () {
    this.userListener = CurrentUserStore.addListener(this._onChange);
    this.totalsListener = CurrentUserTotalsStore.addListener(this._getTotals);
    this.workoutListener = WorkoutStore.addListener(this._updateTotals);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.totalsListener.remove();
    this.workoutListener.remove();
  },

  _updateTotals: function () {
    if (Object.keys(this.state.currentUser).length > 0) {
      ApiUtil.fetchCurrentUserTotals(this.state.currentUser.id);
    }
  },

  _getTotals: function () {
    this.setState({ currentUserTotals: CurrentUserTotalsStore.totals() });
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.user() });
  },

  render: function () {
    var currentUser = this.state.currentUser;

    if (Object.keys(this.state.currentUser).length > 0) {
      var currentUserTotals = this.state.currentUserTotals;

      var hours = Math.floor(currentUserTotals.totalDuration / 3600);
      var minutes = Math.floor(currentUserTotals.totalDuration % 3600 / 60);
      var seconds = currentUserTotals.totalDuration % 60;
      var duration = hours + ':' + minutes + ':' + seconds;

      return (
        <div className="user-info">
          <p>{currentUser.username}</p>
          <p>Lifetime Stats</p>
          <p>Duration: {duration}</p>
          <p>Distance: {currentUserTotals.totalDistance}</p>
          <p>Calories: {currentUserTotals.totalCalories}</p>
          <p>Workouts: {currentUserTotals.workoutCount}</p>
        </div>
      );
    } else {
      return (
        <div className="user-info">
          <p>Please log in to see your total stats and compare with others</p>
        </div>
      );
    }
  }
});




module.exports = InfoPane;
