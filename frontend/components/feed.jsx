var React = require('react'),
    WorkoutStore = require('../stores/workouts'),
    ApiUtil = require('../util/api_util'),
    FeedItem = require('./feedItems'),
    InfoPane = require('./userInfoPane');

var Feed = React.createClass({
  getInitialState: function () {
    return {
      workouts: WorkoutStore.all()
    };
  },

  componentDidMount: function () {
    this.workoutListener = WorkoutStore.addListener(this._onChange);
    ApiUtil.fetchWorkouts();
  },

  componentWillUnmount: function () {
    this.workoutListener.remove();
  },

  _onChange: function () {
    this.setState({ workouts: WorkoutStore.all() });
  },

  render: function () {
    var workouts = this.state.workouts.map(function (workout) {
      return <FeedItem key={workout.workoutId} workout={workout} />;
    });
    return (
      <div className="feed-page clear-fix">
        <div className="feed">
          {workouts}
        </div>
        <InfoPane />
      </div>
    );
  }
});

module.exports = Feed;
