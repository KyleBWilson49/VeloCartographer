var React = require('react'),
    History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  goToUsersPage: function () {
      this.history.push('user/' + this.props.workout.userId);
  },

  render: function () {
    var workout = this.props.workout;
    var hours = Math.floor(workout.duration / 3600);
    var minutes = Math.floor(workout.duration % 3600 / 60);
    var seconds = workout.duration % 60;
    var duration = hours + ':' + minutes + ':' + seconds;

    return (
    <div onClick={this.goToUsersPage}>
      <p>Usernam: {workout.username}</p>
      <p>title: {workout.title}</p>
      <p>distance: {workout.distance}</p>
      <p>duration: {duration}</p>
      <p>Calories: {workout.calories}</p>
      <p>Elevation Diff: {workout.elevation_gain}</p>
      <p>Description: {workout.description}</p>
    </div>
  );
  }
});
