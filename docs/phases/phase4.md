# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
* Route

### Controllers
* RoutesController

### Views
* Route/index.json.jbuilder
* Route/create.json.jbuilder


## Flux
### Views (React Components)
* RoutesIndex
* RoutesIndexItem

### Stores
* Route

### Actions
* ApiActions.receiveUpdatedMap -> triggered by ApiUtil
* ApiActions.receiveRouteInfo -> triggered by ApiUtil
* ApiActions.showRoutePage -> triggered by ApiUtil
* MapActions.createMap
* MapActions.getMapInfo
* MapActions.ShowMap 

### ApiUtil
* ApiUtil.UpdateMap
* ApiUtil.SaveRoute
* ApiUtil.GetRouteInfo

## Gems/Libraries
* react-quill (npm)
