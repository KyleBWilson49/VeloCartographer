var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('../../util/api_util');

var CreateRouteMap = React.createClass({
  getInitialState: function () {
      return { markers: [] };
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

    this.clickListener = google.maps.event.addListener(this.map, 'click', this.handleClick);
  },

  componentWillUnmount: function () {
    this.clickListener.remove();
  },

  handleClick: function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();

    this.placeNewMarker(lat, lng);
  },

  ICONS: {
    start: "assets/start_marker.png",
    middle: "assets/route_marker.png",
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
      // debugger
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

  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = CreateRouteMap;
