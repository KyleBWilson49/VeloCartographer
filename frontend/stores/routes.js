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
  }
};

var addRoute = function (route) {
  _routes.push(route);
  RoutesStore.__emitChange();
};

module.exports = RoutesStore;
