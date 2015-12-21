var React = require('react'),
    ElevationChart = require('./elevationChart'),
    DirectionsStore = require('../../stores/directions'),
    ElevationStore = require('../../stores/elevation');

var RouteInfo = React.createClass({
  getInitialState: function () {
    return {
      distance: DirectionsStore.distance(),
      gain: ElevationStore.gain()
    };
  },

  componentDidMount: function () {
    this.distanceListener = DirectionsStore.addListener(this._updateDistance);
    this.elevationListener = ElevationStore.addListener(this._updateElevation);
  },

  componentWillUnmount: function () {
    this.distanceListener.remove();
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
      </div>
    );
  }
});

module.exports = RouteInfo;
