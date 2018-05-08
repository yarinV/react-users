var React = require('react');

var User = React.createClass({
	
	render:function(){
		var {name,email,address,phone,website,company} = this.props; 
		return (
			<div className="user">
			  <ul>
			  	<li className="user-name">{name}</li>
			  	<li>{email}</li>
			  	<li>{address.city}</li>
			  	<li>{phone}</li>
			  	<li>{website}</li>
			  	<li>{company.name}</li>
			  </ul>
			</div>
		);
	}
});
module.exports = User;