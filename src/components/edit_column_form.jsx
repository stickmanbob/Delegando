import React from "react";
import {connect} from "react-redux";
import { updateColumn } from "../actions/column_actions"
class editColumnForm extends React.Component{

	constructor(props){
		super(props);
		let column = this.props.column;
		console.log(column)
		this.state = column;

		this.handleChange = this.handleChange.bind(this); 
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		this.setState({
			title: e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		let column = this.state;
		console.log(column)
		this.props.updateColumn(column); 
	}

	render(){

		return(
			<form onSubmit={this.handleSubmit} className="edit-column-form">
					<input className="column-title" onChange={this.handleChange} type="text"/>
					<input className="edit-column-submit" type="submit"/>
			</form>
		)
					
	}
}

function mSTP(state,ownProps){
	console.log(ownProps)
	return {
		column: state.entities.columns[ownProps.columnId]
	}
}

function mDTP(dispatch){
	return {
		updateColumn: (col) => dispatch(updateColumn(col)),

	}
}

export default connect(mSTP,mDTP)(editColumnForm); 