var React = require('react'),
    ApiUtil = require('../util/api_util'),
    UsersStore = require('../stores/allUsers'),
    CurrentUserStore = require('../stores/currentUser'),
    History = require('react-router').History;

var AllUserPane = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      users: [],
      followings: CurrentUserStore.followings()
    };
  },

  componentDidMount: function () {
    this.usersListener = UsersStore.addListener(this.updateUsers);
    this.followListener = CurrentUserStore.addListener(this.follows);
    ApiUtil.fetchAllUsers();
  },

  componentWillUnmount: function () {
    this.usersListener.remove();
    this.followListener.remove();
  },

  follows: function () {
    this.setState({
      followings: CurrentUserStore.followings()
    });
  },

  updateUsers: function () {
    this.setState({
      users: UsersStore.all()
    });
  },

  notFollowed: function (user) {
    var follows = this.state.followings;
    var unfollowed = true;

    follows.forEach(function (follow) {
      if (follow.id === user.id) {
        unfollowed = false;
      }
    });

    if (user.id === CurrentUserStore.user().id) {
      unfollowed = false;
    }

    return unfollowed;
  },

  goToUsersPage: function (e) {
    var userId = e.currentTarget.dataset.userid;
    this.history.pushState(null, 'user/' + userId);
  },

  friends: function () {
    var follows = this.state.followings;
    if (Object.keys(follows).length === 0) {
      return;
    }

    var friends = follows.map(function (user) {
      return <div key={user.id}
                  className="find-user"
                  data-userid={user.id}
                  onClick={this.goToUsersPage}>{user.username}</div>;
    }.bind(this));
    return friends;
  },

  render: function () {
    var findUsers = this.state.users.map(function (user) {
      if (this.notFollowed(user)) {
        return <div key={user.id}
                    className="find-user"
                    data-userid={user.id}
                    onClick={this.goToUsersPage}>{user.username}</div>;
      }
    }.bind(this));

    var friends = this.friends();

    return (
      <div className="all-users-pane clear-fix">
        <div className="users-you-may-know clear-fix">
          <h3>Users You May Know</h3>
          {findUsers}
        </div>
        <div className="friends-list clear-fix">
          <h3>Friends</h3>
          {friends}
        </div>
      </div>
    );
  }
});

module.exports = AllUserPane;
