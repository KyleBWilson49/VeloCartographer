var React = require('react'),
    ApiUtil = require('../util/api_util'),
    CurrentUserStore = require('../stores/currentUser');

var App = React.createClass({
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
    this.setState({ currentUser: CurrentUserStore.user });
  },

  _redirectToUserPage: function () {
    var userId = this.state.currentUser().currentUser.id;
    this.props.history.push("user/" + userId);
  },

  _redirectToFeed: function () {
    this.props.history.push('/');
  },

  _redirectToUserProfile: function () {
    var userId = this.state.currentUser().currentUser.id;
    this.props.history.push("profile");
  },

  render: function () {
    return (
      <div>
        <h1>NavBar Goes Here</h1>
        <button onClick={this._redirectToUserPage}>User Page</button>
        <button onClick={this._redirectToFeed}>Feed</button>
        <button onClick={this._redirectToUserProfile}>Profile</button>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
