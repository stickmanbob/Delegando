import React from "react";
import { connect } from "react-redux";
import { createBoard } from "../actions/board_actions";

class NewBoardForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title:""
		}

		//Bindings
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(field){
		return (e)=>{
			e.preventDefault();
			this.setState({
				[field]: e.target.value
			})
		}
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.state.title.length === 0) return; 
		
		let board = Object.assign({},this.state);
		board.columns = [];
		this.props.createBoard(board);
	}

	render(){

		return(
			<section className="new-board-form">
				<label> Title
					<input onChange={this.handleChange("title")} value={this.state.title} type="text"/>
				</label>
				<button onClick={this.handleSubmit}>Create!</button>
			</section>
		)
	}
}

function mSTP(){
	return {

	}
}

function mDTP(dispatch) {
	return {
		createBoard: (board) => dispatch(createBoard(board)),

	}
}

export default connect(mSTP, mDTP)(NewBoardForm);