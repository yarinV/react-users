const redux = require('redux');

var {usersReducer, fetchReducer} = require('reducers');

export var configure = (initialState = {} ) =>{
  var reducer = redux.combineReducers({
    api: fetchReducer,
    users: usersReducer,
  });

  return redux.createStore(reducer, initialState);
};
