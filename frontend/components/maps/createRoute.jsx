var React = require('react'),
    ElevationChart = require('./elevationChart'),
    CreateRouteMap = require('./createRouteMap');

var CreateRoute = React.createClass({
  render: function () {
    return (
      <div className="create-route-page clear-fix">
        <div className="block-for-map">
          <CreateRouteMap />
        </div>
        <div className="map-tools">
          route tools
        </div>
        <div className="route-info-pane">
          <ElevationChart />
          route info
        </div>
      </div>
    );
  }
});

module.exports = CreateRoute;
