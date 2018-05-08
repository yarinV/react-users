var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, hashHistory} = require('react-router');

var Main = require('Main');
var UsersList = require('UsersList');
var store = require('configureStore').configure();

store.subscribe(()=>{
  var state = store.getState();
  console.log('new State', state);
});

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
		<Route exact path='/' component={Main}/>
		<Route path="users" component={UsersList}/>
		</Router>
	</Provider>
  ,document.getElementById('app')
);
