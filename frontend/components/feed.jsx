var React = require('react'),
    WorkoutStore = require('../stores/workouts'),
    ApiUtil = require('../util/api_util'),
    FeedItem = require('./feedItems'),
    InfoPane = require('./userInfoPane'),
    CurrentUserStore = require('../stores/currentUser'),
    AllUserPane = require('./allUserPane');

var Feed = React.createClass({
  getInitialState: function () {
    return {
      workouts: WorkoutStore.all(),
      followings: CurrentUserStore.followings()
    };
  },

  componentDidMount: function () {
    this.workoutListener = WorkoutStore.addListener(this._onChange);
    this.followListener = CurrentUserStore.addListener(this._follows);
    ApiUtil.fetchWorkouts();
  },

  componentWillUnmount: function () {
    this.workoutListener.remove();
    this.followListener.remove();
  },

  _follows: function () {
    this.setState({
      followings: CurrentUserStore.followings()
    });
  },

  _onChange: function () {
    this.setState({ workouts: WorkoutStore.all() });
  },

  _followed: function (id) {
    var follows = this.state.followings;
    var followsId = [CurrentUserStore.user().id];

    follows.forEach(function (follow) {
      followsId.push(follow.id);
    });

    if (followsId.indexOf(id) >= 0) { return true; }
    return false;
  },

  render: function () {
    var workouts = this.state.workouts.map(function (workout) {
        if (this._followed(workout.userId)) {
          return <FeedItem key={workout.workoutId} workout={workout} />;
        }
    }.bind(this));

    return (
      <div className="feed-page clear-fix">
        <div className="feed">
          {workouts}
        </div>
        <div className="feed-side-bar">
          <InfoPane />
          <AllUserPane />
        </div>
      </div>
    );
  }
});

module.exports = Feed;
