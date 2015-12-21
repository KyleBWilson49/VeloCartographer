var React = require('react'),
    ElevationChart = require('./elevationChart'),
    WorkoutForm = require('../workoutForm'),
    DirectionsStore = require('../../stores/directions'),
    ElevationStore = require('../../stores/elevation');

var RouteInfo = React.createClass({
  getInitialState: function () {
    return {
      distance: 0,
      gain: 0
    };
  },

  componentDidMount: function () {
    this.distanceListener = DirectionsStore.addListener(this._updateDistance);
    this.elevationListener = ElevationStore.addListener(this._updateElevation);
  },

  componentWillUnmount: function () {
    this.distanceListener.remove();
    this.elevationListener.remove();
  },

  _updateDistance: function () {
    this.setState({ distance: DirectionsStore.distance().toFixed(2) });
  },

  _updateElevation: function () {
    this.setState({ gain: ElevationStore.gain().toFixed(0) });
  },

  render: function () {
    return (
      <div>
        Distance: {this.state.distance} miles
        <br/>
        Elevation Gain: {this.state.gain} meters
        <br/>
        <WorkoutForm />
      </div>
    );
  }
});

module.exports = RouteInfo;
