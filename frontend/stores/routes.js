var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _routes = [];
var RoutesStore = new Store(AppDispatcher);

RoutesStore.routes = function () {
  return _routes;
};

RoutesStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.ADD_ROUTES:
      addRoute(payload.route);
      break;
    case WorkoutConstants.RECIVE_SAVED_ROUTES:
      updateRoutes(payload.routes);
      break;
  }
};

var addRoute = function (route) {
  _routes.push(route);
  RoutesStore.__emitChange();
};

var updateRoutes = function (routes) {
  _routes = routes;
  RoutesStore.__emitChange();
};

module.exports = RoutesStore;
