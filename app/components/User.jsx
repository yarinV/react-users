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
			address:{city: this.refs.city.value},
			phone: this.refs.phone.value,
			website: this.refs.website.value,
			company: {name:this.refs.company.value},
		};

		var {dispatch} = this.props;
		dispatch(actions.editUser(user));
		this.setState({modalIsopen: false});
	}

	render(){
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		var {id,name,email,address,phone,website,company} = this.props;

		return (
			<div className="user">
			  <ul>
			  	<li className="user-name">{name}</li>
			  	<li>{email}</li>
			  	<li>{address.city}</li>
			  	<li>{phone}</li>
			  	<li>{website}</li>
			  	<li>{company.name}</li>
					<button onClick={this.openModal}>Edit</button>
			  </ul>
				<Modal isOpen={this.state.modalIsopen} >
					<form className="columns small-4 small-offset-2">
						<label>Name: </label><input type="text" ref="name" defaultValue={name}/>
						<label>City: </label><input type="text" ref="city" defaultValue={address.city}/>
						<label>Phone: </label><input type="text" ref="phone" defaultValue={phone}/>
						<label>Website: </label><input type="text" ref="website" defaultValue={website}/>
						<label>Company: </label><input type="text" ref="company" defaultValue={company.name}/>
						<input type="hidden" ref="id" value={id}/>
						<button onClick={this.closeModal}>Save</button>
					</form>
				</Modal>
			</div>
		);
	}
};
module.exports = connect()(User);
