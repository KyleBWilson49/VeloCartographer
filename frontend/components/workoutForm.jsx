var React = require('react'),
    ApiUtil = require('../util/api_util'),
    DirectionsStore = require('../stores/directions'),
    CurrentUserStore = require('../stores/currentUser'),
    ElevationStore = require('../stores/elevation'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var WorkoutForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    title: '',
    description: '',
    distance: '',
    durationHour: '',
    durationMinute: '',
    durationSecond: '',
    calories_burned: '',
    route_title: '',
    route_description: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createWorkout: function (event) {
    event.preventDefault();

    var workout = {};
    var route = {};
    var durationInSeconds = 0;

    Object.keys(this.state).forEach(function (key) {
      if (key === "durationHour") {
        durationInSeconds += (parseInt(this.state[key]) * 3600);
      } else if (key === "durationMinute" ) {
        durationInSeconds += (parseInt(this.state[key]) * 60);
      } else if (key === "durationSecond") {
        durationInSeconds += (parseInt(this.state[key]));
      } else if (key === 'route_title') {
        route[key] = this.state[key];
      } else if (key === 'route_description') {
        route[key] = this.state[key];
      } else {
        workout[key] = this.state[key];
      }
    }.bind(this));

    this.createRoute(route);

    workout.duration = durationInSeconds;
    workout.distance = DirectionsStore.distance();
    workout.calories_burned = this.calculateCalories();

    ApiUtil.createWorkout(workout, function () {
      ApiUtil.fetchWorkouts();
    });

    this.setState(this.blankAttrs);
  },

  createRoute: function (route) {
    route.elevation_gain = ElevationStore.gain().toFixed(0);
    route.distance = DirectionsStore.distance().toFixed(2);
    route.route_path = DirectionsStore.directions();

    debugger
    // ApiUtil.createRoute(route);
  },

  calculateCalories: function () {
    var speed = DirectionsStore.distance() / (this.state.durationHour + (this.state.durationMinute / 60));
    var weight = 160;
    var calories = ((speed * weight * 0.005) + 0.0083 * (speed)) * 7.2;
    debugger
    return calories;
  },

  render: function () {
    // debugger
    return (
      <form role='form' className="workout-form" onSubmit={this.createWorkout}>
        <div className="new-route">
          <h3>Create New Route</h3>
          <div className="form-group">
            <label htmlFor='route-title'>Route Name</label>
            <br/>
            <input type="text"
                   id="route-title"
                   valueLink={this.linkState('route_title')}
            />
          </div>

          <div className="form-group">
            <label htmlFor='route-title-drop-down'>Existing Routes</label>
            <br/>
            <select id="route-title-drop-down">
              <option></option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor='route-desctiption'>Description</label>
            <br/>
            <textarea id="route-desctiption"
                      valueLink={this.linkState('route_description')}
            />
          </div>
        </div>

          <div className="new-workout">
          <h3>Workout Details</h3>
          <div className="form-group">
            <label htmlFor='workout-title'>Title</label>
            <br/>
            <input type="text"
                   id="workout-title"
                   valueLink={this.linkState('title')}
            />
          </div>
          <div className="form-group">
            <label htmlFor='workout-desctiption'>Description</label>
            <br/>
            <textarea id="workout-desctiption"
                      valueLink={this.linkState('description')}
            />
          </div>

          <div className="form-group">
            <p>Duration</p>
            <div className="form-group">
              <label htmlFor='workout-duration-hour'>Hr</label>
              <br/>
              <input type="text"
                     id="workout-duration-hour"
                     placeholder="hh"
                     maxLength="2"
                     valueLink={this.linkState('durationHour')}
              />
            </div>
            <div className="form-group">
              <label htmlFor='workout-duration-minute'>Min</label>
              <br/>
              <input type="text"
                     id="workout-duration-minute"
                     placeholder="mm"
                     maxLength="2"
                     valueLink={this.linkState('durationMinute')}
              />
            </div>
            <div className="form-group">
              <label htmlFor='workout-duration-second'>Sec</label>
              <br/>
              <input type="text"
                     id="workout-duration-second"
                     placeholder="ss"
                     maxLength="2"
                     valueLink={this.linkState('durationSecond')}
              />
            </div>
          </div>
        </div>

        <button>Create Workout</button>
      </form>
    );
  }
});

module.exports = WorkoutForm;
