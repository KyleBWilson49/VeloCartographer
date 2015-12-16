var React = require('react'),
    ApiUtil = require('../util/api_util'),
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
    route_id: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  componentDidMount: function () {
    // get user id for rendering form only on users own page
  },

  createWorkout: function (event) {
    event.preventDefault();

    var workout = {};
    var durationInSeconds = 0;

    Object.keys(this.state).forEach(function (key) {
      if (key === "durationHour") {
        durationInSeconds += (parseInt(this.state[key]) * 3600);
      } else if (key === "durationMinute" ) {
        durationInSeconds += (parseInt(this.state[key]) * 60);
      } else if (key === "durationSecond") {
        durationInSeconds += (parseInt(this.state[key]));
      } else {
        workout[key] = this.state[key];
      }
    }.bind(this));

    workout.duration = durationInSeconds;

    ApiUtil.createWorkout(workout);

    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <form className="workout-form" onSubmit={this.createWorkout}>
        <h3>Create New Workout</h3>
        <div>
          <label htmlFor='workout-title'>Title</label>
          <input type="text"
                 id="workout-title"
                 valueLink={this.linkState('title')}
          />
        </div>
        <div>
          <label htmlFor='workout-desctiption'>Description</label>
          <textarea id="workout-desctiption"
                    valueLink={this.linkState('description')}
          />
        </div>
        <div>
          <label htmlFor='workout-distance'>Distance</label>
          <input type="text"
                 id="workout-distance"
                 valueLink={this.linkState('distance')}
          />
        </div>
        <div>
          <p>Duration</p>
          <div>
            <label htmlFor='workout-duration-hour'>Hr</label>
            <input type="text"
                   id="workout-duration-hour"
                   placeholder="hh"
                   maxLength="2"
                   valueLink={this.linkState('durationHour')}
            />
          </div>
          <div>
            <label htmlFor='workout-duration-minute'>Min</label>
            <input type="text"
                   id="workout-duration-minute"
                   placeholder="mm"
                   maxLength="2"
                   valueLink={this.linkState('durationMinute')}
            />
          </div>
          <div>
            <label htmlFor='workout-duration-second'>Sec</label>
            <input type="text"
                   id="workout-duration-second"
                   placeholder="ss"
                   maxLength="2"
                   valueLink={this.linkState('durationSecond')}
            />
          </div>
        </div>
        <div>
          <label htmlFor='workout-calories'>Calories</label>
          <input type="text"
                 id="workout-calories"
                 valueLink={this.linkState('calories_burned')}
          />
        </div>
        <button>Create Workout</button>
      </form>
    );
  }
});

module.exports = WorkoutForm;
