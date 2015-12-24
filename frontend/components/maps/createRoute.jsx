var React = require('react'),
    ElevationChart = require('./elevationChart'),
    CreateRouteMap = require('./createRouteMap'),
    RouteInfo = require('./routeInfo');

var CreateRoute = React.createClass({
  render: function () {
    return (
      <div className="create-route-page clear-fix">
        <div className="instructions clear-fix">
            <h5>Click on the map to add markers or choose an existing route from the drop down menu.
            The elevation chart will be displayed at the bottom.
            When you have choosen the route, fill out the workout form.
            When you are done Save the workout.</h5>
        </div>
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
