var React = require('react'),
    UserStore = require('../stores/currentUser'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var UserProfile = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { user: UserStore.user };
  },

  editProfile: function (event) {
    event.preventDefault();

    var changes = {};
    var target = event.currentTarget;

    changes.weight = target[0].value;
    changes.gender = target[1].checked ? "M" : "F";
    changes.birthdate = target[3].value;

    var id = this.state.user().currentUser.id;
    ApiUtil.updateUser(changes, id);
  },

  render: function () {
    var user = this.state.user().currentUser;
    return (
      <div>
        <h1>User Profile</h1>
        <form className="edit-user-form" onSubmit={this.editProfile}>
          <label htmlFor="user_weight">Weight</label>
          <input type="number"
                 name="user[weight]"
                 min="0"
                 max="500"
                 step="1"
                 defaultValue={user.weight}
                 id="user_weight"/>

          <br/>

          <label htmlFor="user_gender">Gender</label>
          <input type="radio"
                 name="user[gender]"
                 value="M"
                 id="user_gender"/>Male
          <input type="radio"
                 name="user[gender]"
                 value="F"
                 id="user_gender"/>Female

        <br/>

          <label htmlFor="birthdate">Birthdate</label>
          <input type="date"
                 name="user[birthdate]"
                 defaultValue={user.birthdate}/>

        <br/>

          <button>Save Changes</button>
        </form>
      </div>
    );
  }
});

module.exports = UserProfile;
