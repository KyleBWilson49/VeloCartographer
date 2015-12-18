var React = require('react');

var CreateRoute = React.createClass({
  render: function () {
    return (
      <div className="create-route-page clear-fix">
        <div className="block-for-map">
          map
        </div>
        <div className="map-tools">
          route tools
        </div>
        <div className="route-info-pane">
          route info
        </div>
      </div>
    );
  }
});

module.exports = CreateRoute;
