var React = require('react'),
    CurrentUserStore = require('../stores/currentUser'),
    WorkoutStore = require('../stores/workouts'),
    ApiUtil = require('../util/api_util'),
    CurrentUserTotalsStore = require('../stores/currentUserTotals');

var AllUserPane = React.createClass({
  getInitialState: function () {
    return {users: ''};
  },



  render: function () {
    return (
      <div className="all-users-pane">
        all users tab for finding users
      </div>
    );
  }
});

module.exports = AllUserPane;
