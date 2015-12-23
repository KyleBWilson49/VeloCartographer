var React = require('react'),
    History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  goToUsersPage: function () {
      this.history.pushState(null, 'user/' + this.props.workout.userId);
  },

  render: function () {
    var workout = this.props.workout;
    var hours = Math.floor(workout.duration / 3600);
    var minutes = Math.floor(workout.duration % 3600 / 60);
    var seconds = workout.duration % 60;
    var duration = hours + ':' + minutes + ':' + seconds;
    var decimalTime = hours + (minutes / 60) + (seconds / 3600);
    var avgSpeed = (workout.distance / decimalTime).toFixed(1);

    var imageUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                   workout.start_position +
                   "&size=200x200&zoom=14&markers=color:green%7Clabel:S%7C" +
                   workout.start_position +
                   "&key=" +
                   window.GOOGLE_KEYS.GOOGLE_MAPS;

    return (
    <div className="feed-item" onClick={this.goToUsersPage}>
      <div id='feed-item-info' className='clear-fix'>
        <div className='feed-user-info'>
          <h2 id='title'>{workout.title}</h2>
          <h3>{workout.username}</h3>
        </div>
        <div className='feed-workout-details container clear-fix'>
          <table className="table">
            <tbody>
              <tr >
                <td id="workout-details-th">Distance</td>
                <td id="workout-details-th">{workout.distance}</td>
              </tr>
              <tr>
                <td id="workout-details-th">Duration</td>
                <td id="workout-details-th">{duration}</td>
              </tr>
              <tr>
                <td id="workout-details-th">Average Speed</td>
                <td id="workout-details-th">{avgSpeed}</td>
              </tr>
              <tr>
                <td id="workout-details-th">Calories</td>
                <td id="workout-details-th">{workout.calories}</td>
              </tr>
              <tr>
                <td id="workout-details-th">Elevation Gain</td>
                <td id="workout-details-th">{workout.elevation_gain}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='feed-mini-map'>
        <img src={imageUrl}
             alt="starting position map"/>
      </div>
    </div>
  );
  }
});
