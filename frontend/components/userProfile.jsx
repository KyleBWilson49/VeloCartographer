var React = require('react'),
    UserStore = require('../stores/currentUser'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var UserProfile = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      user: UserStore.user(),
      message: UserStore.message()
    };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _onChange: function () {
    this.setState({
      user: UserStore.user(),
      message: UserStore.message()
    });
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
    var user = this.state.user;
    return (
      <div className='user-profile clear-fix'>
        <div className='user-profile-form'>
          <h1>User Profile</h1>
          <p>{UserStore.message()}</p>
          <form className="edit-user-form" onSubmit={this.editProfile}>
            <label htmlFor="user_weight">Weight</label>
            <br/>
            <input type="number"
                   name="user[weight]"
                   min="0"
                   max="500"
                   step="1"
                   defaultValue={user.weight}
                   id="user_weight"/>

            <br/>

            <label htmlFor="birthdate">Birthdate</label>
            <br/>
            <input type="date"
                   name="user[birthdate]"
                   defaultValue={user.birthdate}/>

          <br/>
          <br/>

            <button className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;
