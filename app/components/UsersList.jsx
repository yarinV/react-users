var React = require('react');
var {connect} = require('react-redux');

var User = require('User');
var actions = require('actions');

var UsersList = React.createClass({
	componentWillMount(){
		var {dispatch} = this.props;
		actions.fetchUsers(dispatch)
	},
	render(){
		var that = this;
		function renderUsers(){
			var {api, users} = that.props;
			if( typeof users !== "undefined" && users.length > 0){
				return users.map((user)=>{
			 		return(
			 			<User key={user.id} {...user}/>
			 		);
		 		})
			}
		}

		return(
        <div>
	        <h2>Users Component</h2>
	        <div className="users-list">
	        	<div className="grid-x grid-padding-x column small-8 small-offset-2">
	        		{renderUsers()}
	        	</div>
	        </div>
        </div>
		);
	}
});

function mapStateToProps(state){
	return{
		users: state.users,
		api: state.api
	};
}

module.exports = connect(mapStateToProps)(UsersList);
