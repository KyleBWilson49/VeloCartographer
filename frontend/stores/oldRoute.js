var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    WorkoutConstants = require('../constants/workout_constants');

var _oldRoute = {};
var OldRouteStore = new Store(AppDispatcher);

OldRouteStore.route = function () {
  return _oldRoute;
};

OldRouteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case WorkoutConstants.SHOW_OLD_ROUTE:
      updateOldRoute(payload.route);
      break;
    case WorkoutConstants.REMOVE_ROUTE:
      removeRoute();
      break;
  }
};

var updateOldRoute = function (route) {
  _oldRoute = route;
  OldRouteStore.__emitChange();
};

var removeRoute = function () {
  _oldRoute = {};
  OldRouteStore.__emitChange();
};

module.exports = OldRouteStore;
