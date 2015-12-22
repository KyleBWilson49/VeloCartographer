var React = require('react'),
    ReactDOM = require('react-dom'),
    GoogleApiUtil = require('../../util/google_api'),
    DirectionStore = require('../../stores/directions'),
    OldRouteStore = require('../../stores/oldRoute');

var CreateRouteMap = React.createClass({
  getInitialState: function () {
      return {
        markers: [],
        directions: DirectionStore.directions()
      };
  },

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var bikeLayer = new google.maps.BicyclingLayer();
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(map, mapOptions);
    bikeLayer.setMap(this.map);

    var displayOptions = {
      suppressMarkers: true,
      preserveViewport: true
    };
    this.directionsDisplay = new google.maps.DirectionsRenderer(displayOptions);
    this.directionsDisplay.setMap(this.map);

    this.clickListener = google.maps.event.addListener(this.map, 'click', this.handleClick);
    this.directionsListener = DirectionStore.addListener(this.updateDirections);
    this.oldRouteListener = OldRouteStore.addListener(this.showOldRoute);
  },

  componentWillUnmount: function () {
    this.clickListener.remove();
    this.directionsListener.remove();
    this.oldRouteListener.remove();
  },

  showOldRoute: function () {
    // this.removeAllMarkers();
    oldRoute = JSON.parse(OldRouteStore.route().route_path).reverse();
    oldRoute.forEach(function (position) {
      this.placeNewMarker(position[0], position[1]);
    }.bind(this));
  },

  handleClick: function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();

    this.getCorrectedClickPos(lat, lng);
  },

  getCorrectedClickPos: function (lat, lng) {
    GoogleApiUtil.getSnappedPos(lat, lng, this.snappedPos);
  },

  snappedPos: function (data) {
    var position = data.snappedPoints[0].location;
    var lat = position.latitude;
    var lng = position.longitude;

    this.placeNewMarker(lat, lng);
  },

  updateDirections: function () {
    this.setState({ directions: DirectionStore.directions() });
    this.renderDirections();
  },

  renderDirections: function () {
    this.directionsDisplay.setDirections(this.state.directions);
  },

  ICONS: {
    start: "assets/start_marker.png",
    middle: "assets/blue_middle_marker.png",
    end: "assets/stop_marker.png"
  },

  placeNewMarker: function (lat, lng) {
    markers = this.state.markers;
    var latLng = { lat: lat, lng: lng };
    var marker;

    if (markers.length === 0) {
      marker = this.placeStartMarker(latLng);
    } else if (markers.length === 1) {
      marker = this.placeEndMarker(latLng);
    } else if (markers.length > 1) {
      oldMarker = markers[0];
      this.removeMarker(oldMarker);
      markers.shift();
      oldLatLng = {
        lat: oldMarker.position.lat(),
        lng: oldMarker.position.lng()
      };

      markers.unshift(this.placeMiddleMarker(oldLatLng));
      marker = this.placeEndMarker(latLng);
    }

    markers.unshift(marker);
    this.setState({ markers: markers });

    if (markers.length > 1) {
      this.getDirections();
    }

    GoogleApiUtil.storeMarkers(this.state.markers);
  },

  placeStartMarker: function (latLng) {
    return new google.maps.Marker({
      position: latLng,
      icon: this.ICONS.start,
      map: this.map
    });
  },

  placeMiddleMarker: function (latLng) {
    return new google.maps.Marker({
      position: latLng,
      icon: this.ICONS.middle,
      map: this.map
    });
  },

  placeEndMarker: function (latLng) {
    return new google.maps.Marker({
      position: latLng,
      icon: this.ICONS.end,
      map: this.map
    });
  },

  removeMarker: function (marker) {
    marker.setMap(null);
  },

  getDirections: function () {
    var waypoints = this.createWaypoints();
    var start = waypoints[0].location;
    var end = waypoints[waypoints.length - 1].location;
    waypoints.pop();
    waypoints.shift();

    GoogleApiUtil.getDirections(start, end, waypoints);
  },

  createWaypoints: function() {
    var markers = this.state.markers;
    var waypoints = [];

    markers.forEach(function (marker) {
      var latLng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

      waypoints.push({
        location: latLng,
        stopover: false
      });
    });
    return waypoints;
  },

  removeAllMarkers: function () {
    this.state.markers.forEach(function (marker) {
      maker.setMap(null);
    });

    this.setState({ markers: [] });
  },

  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = CreateRouteMap;
