const redux = require('redux');

var {usersReducer} = require('reducers');

export var configure = (initialState = {} ) =>{
  var reducer = redux.combineReducers({
    usersList: usersReducer,
  });

  return redux.createStore(reducer, initialState);
};
