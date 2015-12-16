var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app'),
    Feed = require('./components/feed'),
    UserPage = require('./components/userPage'),
    UserProfile = require('./components/userProfile');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Feed}/>
    <Route path="user/:userId" component={UserPage}/>
    <Route path="profile" component={UserProfile}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
