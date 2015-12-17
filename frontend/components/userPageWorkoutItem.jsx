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
    <div className="feed-item">
      <div id='feed-item-info' className='clear-fix'>
        <div className='feed-user-info'>
          <p id='title'>{workout.title}</p>
          <p>Username: {workout.username}</p>
        </div>
        <div className='feed-workout-details'>
          <p>distance: {workout.distance}</p>
          <p>duration: {duration}</p>
          <p>Calories: {workout.calories}</p>
          <p>Elevation Diff: {workout.elevation_gain}</p>
          <p>Description: {workout.description}</p>
        </div>
      </div>
      <div className='feed-mini-map'>
      </div>
    </div>
  );
  }
});
