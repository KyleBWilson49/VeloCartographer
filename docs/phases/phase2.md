# Phase 2: Flux Architecture with User and Workout CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* UserIndexItem
* WorkoutsIndex
  - WorkoutsIndexItem
* Workout Form

### Stores
* User
* Workouts

### Actions
* ApiActions.receiveAllWorkouts -> triggered by ApiUtil
* ApiActions.receiveSingleWorkout
* ApiActions.deleteWorkout
* ApiActions.receiveSingleUser
* WorkoutActions.fetchAllWorkouts -> triggers ApiUtil
* WorkoutActions.fetchSingleWorkout
* WorkoutActions.createWorkout
* WorkoutActions.editWorkout
* WorkoutActions.destroyWorkout
* User.Actions.createUser
* User.Actions.editUser

### ApiUtil
* ApiUtil.fetchAllWorkouts
* ApiUtil.fetchSingleWorkout
* ApiUtil.createWorkout
* ApiUtil.editWorkout
* ApiUtil.destroyWorkout
* ApiUtil.fetchUser
* ApiUtil.editUser 

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
