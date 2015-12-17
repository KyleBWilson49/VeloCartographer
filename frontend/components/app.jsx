var React = require('react'),
    NavBar = require('./navBar'),
    ApiUtil = require('../util/api_util'),
    CurrentUserStore = require('../stores/currentUser');

var App = React.createClass({
  render: function () {
    return (
      <div className='app clear-fix'>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
