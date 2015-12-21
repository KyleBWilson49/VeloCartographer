var React = require('react'),
    ElevationChart = require('./elevationChart'),
    DirectionsStore = require('../../stores/directions');

var RouteInfo = React.createClass({
  getInitialState: function () {
    return {
      distance: DirectionsStore.distance()
    };
  },

  componentDidMount: function () {
    this.distanceListener = DirectionsStore.addListener(this._updateDistance);
  },

  componentWillUnmount: function () {
    this.distanceListener.remove();
  },

  _updateDistance: function () {
    this.setState({ distance: DirectionsStore.distance().toFixed(2) });
  },

  render: function () {
    return (
      <div>
        Distance: {this.state.distance}
      </div>
    );
  }
});

module.exports = RouteInfo;
