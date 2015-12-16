var React = require('react'),
    WorkoutForm = require('./workoutForm'),
    WorkoutStore = require('../stores/workouts');

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
      return <li key={workout.workoutId}>{workout.title}</li>;
    });

    return (
      <div>
        <h3>This is the users page</h3>
        <WorkoutForm />
        <ul>
          {workouts}
        </ul>
      </div>
    );
  }
});

module.exports = UserPage;
