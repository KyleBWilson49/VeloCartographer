var React = require('react'),
    WorkoutForm = require('./workoutForm'),
    WorkoutStore = require('../stores/workouts'),
    UserPageWorkoutItem = require('./userPageWorkoutItem'),
    InfoPane = require('./userInfoPane');

var UserPage = React.createClass({
  getInitialState: function () {
      return {
        workouts: WorkoutStore.find(parseInt(this.props.params.userId))
      };
  },

  componentDidMount: function () {
    this.workoutListener = WorkoutStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.workoutListener.remove();
  },

  _onChange: function () {
    this.setState({
      workouts: WorkoutStore.find(parseInt(this.props.params.userId))
    });
  },

  render: function () {
    var workouts = this.state.workouts.map(function (workout) {
      return <UserPageWorkoutItem key={workout.workoutId} workout={workout} />;
    });

    return (
      <div className='user-page clear-fix'>
        <InfoPane />
        <div className='user-workout-list'>
          <WorkoutForm className='workout-form' />
          {workouts}
        </div>
      </div>
    );
  }
});

module.exports = UserPage;
