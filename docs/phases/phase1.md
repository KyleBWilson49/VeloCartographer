# Phase 1: User Authentication, Note Model and JSON API

## Rails
### Models
* User
* Workout

### Controllers
* Api::UsersController (create, new, index, show)
* SessionsController (create, new, destroy)
* Api::WorkoutsController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* workouts/index.json.jbuilder
* workouts/show.json.jbuilder

## Gems/Libraries
* BCrypt (Gem)
