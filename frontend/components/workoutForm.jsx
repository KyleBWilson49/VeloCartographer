var React = require('react'),
    ApiUtil = require('../util/api_util'),
    DirectionsStore = require('../stores/directions'),
    RoutesStore = require('../stores/routes'),
    CurrentUserStore = require('../stores/currentUser'),
    ElevationStore = require('../stores/elevation'),
    GoogleMap = require('./maps/createRouteMap'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    History = require('react-router').History;


var WorkoutForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    description: '',
    distance: '',
    durationHour: '',
    durationMinute: '',
    durationSecond: '',
    calories_burned: '',
    route_name: '',
    route_description: '',
    routes: null
  },

  getInitialState: function () {
    this.newRoute = true;
    return this.blankAttrs;
  },

  componentDidMount: function () {
    ApiUtil.fetchRoutes();
    this.routeListener = RoutesStore.addListener(this._updateRoutes);
  },

  componentWillUnmount: function () {
    this.routeListener.remove();
  },

  _updateRoutes: function () {
    if (RoutesStore.routes()[0]) {
      this.setState({
        routes: RoutesStore.routes()
      });
    }
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
      } else if (key === 'route_name') {
        route[key] = this.state[key];
      } else if (key === 'route_description') {
        route[key] = this.state[key];
      } else {
        workout[key] = this.state[key];
      }
    }.bind(this));

    if (this.newRoute) {
      this.createRoute(route);
    }

    workout.duration = durationInSeconds;
    workout.distance = DirectionsStore.distance().toFixed(2);
    workout.elevation_gain = ElevationStore.gain().toFixed(0);
    workout.calories_burned = this.calculateCalories();
    var markers = DirectionsStore.markers();
    var start_marker = markers[markers.length - 1].position;
    workout.start_position = start_marker.lat() + "," + start_marker.lng();

    ApiUtil.createWorkout(workout, function () {
      ApiUtil.fetchWorkouts();
    });

    this.history.pushState(null, "/user/" + CurrentUserStore.user().id);
    this.setState(this.blankAttrs);
  },

  createRoute: function (route) {
    route.elevation_gain = ElevationStore.gain().toFixed(0);
    route.distance = DirectionsStore.distance().toFixed(2);
    var path = DirectionsStore.markers().map(function (marker) {
      return [marker.position.lat(), marker.position.lng()];
    });
    route.route_path = JSON.stringify(path);

    ApiUtil.createRoute(route);
  },

  calculateCalories: function () {
    // var speed = DirectionsStore.distance() / (parseInt(this.state.durationHour) + (parseInt(this.state.durationMinute) / 60));
    // var weight = CurrentUserStore.user().weight;
    // var rise = ElevationStore.gain();
    var distance = DirectionsStore.distance();
    var calories = 40 * distance;
    return calories;
  },

  selectRoute: function (e) {
    var routeString = e.currentTarget.selectedOptions[0].dataset.route;

    if (routeString) {
      var route = JSON.parse(routeString);
      this.setState({
        route_name: route.route_name,
        route_description: route.route_description
      });
      ApiUtil.showOldRoute(route);
      this.newRoute = false;

    } else {
      this.setState({
        route_name: "",
        route_description: ""
      });
      ApiUtil.removeRoute();
      this.newRoute = true;
    }
  },

  render: function () {
    var routes;
    if (this.state.routes) {
      routes = RoutesStore.routes().map(function (route, idx) {
        return <option key={idx} data-route={JSON.stringify(route)}>{route.route_name}</option>;
      });
    }

    return (
      <form role='form' className="workout-form" onSubmit={this.createWorkout}>
        <div className="new-route">
          <h3>Create New Route</h3>
          <div className="form-group">
            <label htmlFor='route-title'>Route Name</label>
            <br/>
            <input type="text"
                   id="route-title"
                   valueLink={this.linkState('route_name')}
            />
          </div>

          <div className="form-group">
            <label htmlFor='route-title-drop-down'>Existing Routes</label>
            <br/>
            <select id="route-title-drop-down" onChange={this.selectRoute}>
              <option>New Route</option>
              {routes}
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
