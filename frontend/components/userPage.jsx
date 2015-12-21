var React = require('react'),
    WorkoutStore = require('../stores/workouts'),
    UserPageWorkoutItem = require('./userPageWorkoutItem'),
    PageInfoPane = require('./userPageInfoPane'),
    CurrentUserStore = require('../stores/currentUser'),
    ApiUtil = require('../util/api_util');

var UserPage = React.createClass({
  getInitialState: function () {
      return {
        workouts: WorkoutStore.find(parseInt(this.props.params.userId)),
        currentUser: CurrentUserStore.user()
      };
  },

  componentDidMount: function () {
    scrollTo(document, 0);
    ApiUtil.fetchWorkouts();
    this.workoutListener = WorkoutStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this._currentUser);
  },

  componentWillUnmount: function () {
    this.workoutListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps: function () {
    this.setState({
      workouts: WorkoutStore.find(parseInt(this.props.params.userId))
    });
  },

  _onChange: function () {
    this.setState({
      workouts: WorkoutStore.find(parseInt(this.props.params.userId))
    });
  },

  _currentUser: function () {
    this.setState({
      currentUser: CurrentUserStore.user()
    });
  },

  render: function () {
    var workouts = this.state.workouts.map(function (workout) {
      return <UserPageWorkoutItem key={workout.workoutId} workout={workout} />;
    });

    var page;
    var userPageId = parseInt(this.props.params.userId);

    if (userPageId === this.state.currentUser.id) {
      page =(
        <div>
          <PageInfoPane user={userPageId}/>
          <div className='user-workout-list'>
            {workouts}
          </div>
        </div>
      );
    } else {
      page = (
        <div>
          <PageInfoPane user={userPageId}/>
          <div className='user-workout-list'>
            {workouts}
          </div>
        </div>
      );
    }

    return (
      <div className='user-page clear-fix'>
        {page}
      </div>
    );
  }
});

module.exports = UserPage;
