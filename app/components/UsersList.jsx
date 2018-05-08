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
		var that = this
		function renderUsers(){
			var {users} = that.props;
			if(users){
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
	        <div className="users-list row">
	        	<div className="columns small-10 small-offset-2">
	        		{renderUsers()}
	        	</div>
	        </div>
        </div>
		);
	}
});

function mapStateToProps(state){
	return{users: state.usersList.users};
}

module.exports = connect(mapStateToProps)(UsersList);
