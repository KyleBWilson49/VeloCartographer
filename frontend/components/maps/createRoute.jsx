var React = require('react'),
    ElevationChart = require('./elevationChart'),
    CreateRouteMap = require('./createRouteMap'),
    RouteInfo = require('./routeInfo');

var CreateRoute = React.createClass({
  render: function () {
    return (
      <div className="create-route-page clear-fix">
        <div className="block-for-map">
          <CreateRouteMap />
        </div>
        <div className="map-tools">
          <RouteInfo />
        </div>
        <div className="route-info-pane">
          <ElevationChart />
        </div>
      </div>
    );
  }
});

module.exports = CreateRoute;
