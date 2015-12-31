var React = require('react'),
    CurrentUserStore = require('../stores/currentUser'),
    WorkoutStore = require('../stores/workouts'),
    ApiUtil = require('../util/api_util'),
    CurrentUserTotalsStore = require('../stores/currentUserTotals'),
    UserStore = require('../stores/user.js');

var PageInfoPane = React.createClass({
  getInitialState: function () {
    return {
      pageUserInfo: UserStore.totals(),
      currentUserId: CurrentUserStore.user().id,
      currentUserFollowings: CurrentUserStore.followings()
    };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._updateTotals);
    this.currentUserListener = CurrentUserStore.addListener(this._updateFollow);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps: function() {
    if (this.props.user) {
      ApiUtil.fetchUserTotals(this.props.user);
    }
  },

  _updateFollow: function () {
    this.setState({
      currentUserFollowings: CurrentUserStore.followings()
    });
  },

  _updateTotals: function () {
    this.setState({
      pageUserInfo: UserStore.totals()
    });
  },

  handleFollow: function () {
    ApiUtil.followUser(this.state.pageUserInfo.user.id);
  },

  handleUnFollow: function () {
    ApiUtil.unfollowUser(this.state.pageUserInfo.user.id);
  },

  renderTime: function (hour, minutes, seconds) {
    time = '';
    time += hour;
    time += ':';

    if (minutes < 10) {
      time += 0;
      time += minutes;
    } else {
      time += minutes;
    }

    time += ':';

    if (seconds < 10) {
      time += 0;
      time += seconds;
    } else {
      time += seconds;
    }

    return time;
  },

  render: function () {
    if (Object.keys(this.state.pageUserInfo).length > 0) {
      var UserInfo = this.state.pageUserInfo;
      var UserTotals = UserInfo.totals;

      var hours = Math.floor(UserTotals.totalDuration / 3600);
      var minutes = Math.floor(UserTotals.totalDuration % 3600 / 60);
      var seconds = UserTotals.totalDuration % 60;
      var duration = this.renderTime(hours, minutes, seconds);

      var followings = this.state.currentUserFollowings;
      var followed = false;

      followings.forEach(function (follow) {
        if (follow.id === this.state.pageUserInfo.user.id) {
          followed = true;
        }
      }.bind(this));

      var button;
      if (this.state.pageUserInfo.user.id === this.state.currentUserId) {
        button = "";
      } else if (followed){
        button = <button onClick={this.handleUnFollow}>Unfollow</button>;
      } else {
        button = <button onClick={this.handleFollow}>Follow</button>;
      }

      return (
        <div className="user-info container">
          <h2>{UserInfo.user.username}</h2>
          {button}
          <h4>Lifetime Stats</h4>

          <table className="table">
            <tbody>
              <tr>
                <td>Duration</td>
                <td>{duration}</td>
              </tr>
              <tr>
                <td>Distance</td>
                <td>{UserTotals.totalDistance}</td>
              </tr>
              <tr>
                <td>Calories</td>
                <td>{UserTotals.totalCalories}</td>
              </tr>
              <tr>
                <td>Workouts</td>
                <td>{UserTotals.workoutCount}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="user-info">
          <p>Please log in to see your total stats and compare with others</p>
        </div>
      );
    }

    return (
      <div className="user-info">
        user page info
      </div>
    );
  }
});




module.exports = PageInfoPane;
