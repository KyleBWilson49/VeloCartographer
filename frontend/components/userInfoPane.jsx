var React = require('react'),
    CurrentUserStore = require('../stores/currentUser'),
    ApiUtil = require('../util/api_util');

var InfoPane = React.createClass({
  getInitialState: function () {
    return { currentUser: CurrentUserStore.user };
  },

  componentDidMount: function () {
    this.userListener = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.user });
    ApiUtil.fetchCurrentUserTotals(this.state.currentUser().currentUser.id);
  },

  render: function () {
    var currentUser = this.state.currentUser;

    return (
      <div className="user-info">
        <p>{currentUser.username}</p>
      </div>
    );
  }
});


// <p>{currentUser.age}</p>
// <p>{currentUser.totalDuration}</p>
// <p>{currentUser.totalDistance}</p>
// <p>{currentUser.totalCalories}</p>
// <p>{currentUser.totalWorkouts}</p>

module.exports = InfoPane;
