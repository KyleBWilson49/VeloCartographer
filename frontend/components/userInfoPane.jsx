var React = require('react'),
    CurrentUserStore = require('../stores/currentUser'),
    ApiUtil = require('../util/api_util'),
    CurrentUserTotalsStore = require('../stores/currentUserTotals');

var InfoPane = React.createClass({
  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.user,
      currentUserTotals: CurrentUserTotalsStore.totals
    };
  },

  componentDidMount: function () {
    this.userListener = CurrentUserStore.addListener(this._onChange);
    this.totalsListener = CurrentUserTotalsStore.addListener(this._getTotals);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.totalsListener.remove();
  },

  _getTotals: function () {
    this.setState({ currentUserTotals: CurrentUserTotalsStore.totals });
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.user });
    ApiUtil.fetchCurrentUserTotals(this.state.currentUser().currentUser.id);
  },

  render: function () {
    var currentUser = this.state.currentUser;
    var currentUserTotals = this.state.currentUserTotals;

    return (
      <div className="user-info">
        <p>{currentUser.username}</p>
        <p>{currentUserTotals.totalDuration}</p>
        <p>{currentUserTotals.totalDistance}</p>
        <p>{currentUserTotals.totalCalories}</p>
        <p>{currentUserTotals.workoutCount}</p>
      </div>
    );
  }
});




module.exports = InfoPane;
