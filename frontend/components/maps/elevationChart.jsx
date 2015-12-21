var React = require('react'),
    ElevationStore = require('../../stores/elevation'),
    DirectionsStore = require('../../stores/directions'),
    GoogleApiUtil = require('../../util/google_api');


var ElevationChart = React.createClass({
  getInitialState: function () {
    return {
      elevation: ElevationStore.elevations()
    };
  },

  componentDidMount: function () {
    this.directionsListener = DirectionsStore.addListener(this._fetchElevation);
    this.elevationListener = ElevationStore.addListener(this._elevationChange);
  },

  componentWillUnmount: function () {
    this.directionsListener.remove();
    this.elevationListener.remove();
    GoogleApiUtil.resetElevation();
  },

  _fetchElevation: function () {
    var waypoints = DirectionsStore.directions().routes[0].overview_path;

    this._getElevation(waypoints);
  },

  _getElevation: function (path) {
    var distance = DirectionsStore.distance();
    var elevator = new google.maps.ElevationService();

    elevator.getElevationAlongPath({
      path: path,
      samples: distance * 10
    }, this.plotElevation);
  },

  plotElevation: function (elevations, status) {
    var chartDiv = document.getElementById('elevation-chart');

    if (status !== "OK") {
      console.log("elevation plot error: " + status);
    }

    var chart = new google.visualization.LineChart(chartDiv);

    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Sample');
    data.addColumn('number', 'Elevation');
    for (var i = 0; i < elevations.length; i++) {
      data.addRow(['', elevations[i].elevation]);
    }

    chart.draw(data, {
      height: 150,
      legend: 'none',
      titleY: 'Elevation (m)'
    });
  },

  _elevationChange: function () {
    this.setState({
      elevation: ElevationStore.elevations()
    });
  },

  render: function () {
    return (
      <div id="elevation-chart">
        chart goes here
      </div>
    );
  }
});

module.exports = ElevationChart;
