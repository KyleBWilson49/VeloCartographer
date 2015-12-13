# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Follower

### Controllers
* Api::FollowersController (create, destroy, index)

### Views
* Users/index.json.jbuilder
* UserTotals/show.json.jbuilder
* Follow/create.json.jbuilder
* Follow/index.json.jbuilder

## Flux
### Views (React Components)
* UsersIndex
* SearchIndex
* UserTotals
* UserFollowsTotals

### Stores
* add to user store

### Actions
* ApiActions.receiveAllUserTotals -> triggered by ApiUtil
* NotebookActions.fetchAllUserTotals -> triggers ApiUtil
* NotebookActions.createFollow
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllUserTotals
* ApiUtil.createFollow
* ApiUtil.destroyFollow

## Gems/Libraries
