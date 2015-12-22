var React = require('react'),
    ApiUtil = require('../util/api_util'),
    CurrentUserStore = require('../stores/currentUser'),
    History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { currentUser: CurrentUserStore.user() };
  },

  componentDidMount: function () {
    this.userListener = CurrentUserStore.addListener(this._onChange);
    this.getCurrentUser();
  },

  getCurrentUser: function () {
    ApiUtil.fetchCurrentUser();
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.user() });
  },

  _redirectToUserPage: function () {
    var userId = this.state.currentUser.id;
    this.history.push("user/" + userId);
  },

  _redirectToFeed: function () {
    this.history.push('/');
  },

  _redirectToCreateRoute: function () {
    this.history.push('createRoute');
  },

  _redirectToUserProfile: function () {
    var userId = this.state.currentUser.id;
    this.history.push("profile");
  },

  _logOut: function () {
    ApiUtil.logOut();
  },

  render: function () {
    var buttons;
    if (Object.keys(this.state.currentUser).length === 0) {
      buttons = (
        <div className='clear-fix' id='nav-bar'>
          <h1 className='title'>Velo Cartographer</h1>
          <nav><a href="/api/users/new">Sign Up</a></nav>
          <nav><a href="/session/new">Sign In</a></nav>
          <nav onClick={this._redirectToFeed}>Explore</nav>
        </div>
      );
    } else {
      buttons = (
        <div className='clear-fix' id='nav-bar'>
          <h1 className='title'>Velo Cartographer</h1>
          <nav onClick={this._logOut}><a href="/session/new">Log Out</a></nav>
          <nav onClick={this._redirectToUserProfile}>Profile</nav>
          <nav onClick={this._redirectToUserPage}>User Page</nav>
          <nav onClick={this._redirectToFeed}>Feed</nav>
          <nav onClick={this._redirectToCreateRoute}>Log Workout</nav>
        </div>
      );
    }


    return (
      <div className='nav clear-fix'>
        {buttons}
        {this.props.children}
      </div>
    );
  }
});

module.exports = NavBar;
