import React, { Component } from 'react';
var Modal = require('react-modal');

var actions = require('actions');
var {connect} = require('react-redux');

Modal.setAppElement('#app');

class User extends Component{
	constructor(){
		super();
		this.state = {
			modalIsopen: false
		}
	}

	openModal(id){
		this.setState({modalIsopen: true, id})
	}

	closeModal(){
		var user = {
			id: this.refs.id.value,
			name: this.refs.name.value,
			email: this.refs.email.value,
			address:{city: this.refs.city.value},
			phone: this.refs.phone.value,
			website: this.refs.website.value,
			company: {name:this.refs.company.value},
		};

		var {dispatch} = this.props;
		dispatch(actions.editUser(user));
		this.setState({modalIsopen: false});
	}

	handleDeleteUser(id){
		var {users, dispatch} = this.props;
		actions.deleteUser(users, id, dispatch);
	}

	render(){
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleDeleteUser = this.handleDeleteUser.bind(this);

		const customStyles = {
		  content : {
		    top        : '50%',
		    left       : '50%',
		    right      : 'auto',
		    bottom     : 'auto',
		    transform  : 'translate(-50%, -50%)',
				width: '40%'
		  }
		};

		var {id,name,email,address,phone,website,company} = this.props;

		return (
			<div className="user cell  large-3 large-offset-1 medium-5 medium-offset-1 small-12">
			  <ul>
			  	<li className="user-name">{name}</li>
			  	<li>{email}</li>
			  	<li>{address.city}</li>
			  	<li>{phone}</li>
			  	<li>{website}</li>
			  	<li>{company.name}</li>
					<button type="button" className="button" onClick={this.openModal}>Edit</button>
					<button type="button" className="button alert" onClick={()=>{this.handleDeleteUser(id)}}>Delete</button>
			  </ul>
				<Modal isOpen={this.state.modalIsopen} style={customStyles}>
					<form className="columns small-8 small-offset-2">
						<label>Name: </label><input type="text" ref="name" defaultValue={name}/>
						<label>Email: </label><input type="text" ref="email" defaultValue={email}/>
						<label>City: </label><input type="text" ref="city" defaultValue={address.city}/>
						<label>Phone: </label><input type="text" ref="phone" defaultValue={phone}/>
						<label>Website: </label><input type="text" ref="website" defaultValue={website}/>
						<label>Company: </label><input type="text" ref="company" defaultValue={company.name}/>
						<input type="hidden" ref="id" value={id}/>
						<button type="button" onClick={this.closeModal} className="button">Save</button>
						<button type="button" className="close-button" onClick={this.closeModal}>x</button>
					</form>
				</Modal>
			</div>
		);
	}
};

function mapStateToProps(state){
	return{
		users: state.users,
	};
}

module.exports = connect(mapStateToProps)(User);
