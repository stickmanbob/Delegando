import React from "react";
import {connect} from "redux";

class editColumnForm extends React.Component{

	constructor(props){
		super(props);
		let column = this.props.column;
		this.state = column;

		this.handleChange = this.handleChange.bind(this); 
	}

	handleChange(e){
		e.preventDefault();
		this.setState({
			title: e.target.value
		})
	}

	handleSubmit(){

	}

	render(){
					<input onChange={this.handleChange} type="text"/>
					
	}
}