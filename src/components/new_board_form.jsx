import React from "react";
import { connect } from "react-redux";
import { createBoard } from "../actions/board_actions";

class NewBoardForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title:""
		}

		this.formRef = React.createRef();

		//Bindings
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOuterClick=this.handleOuterClick.bind(this);
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleOuterClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleOuterClick, false);
	}

	handleOuterClick(e){
	
		if (!this.formRef.current) return;
		if (!this.formRef.current.contains(e.target)) {
			this.props.hideForm(); 
		}
		console.log(); 
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
		this.props.hideForm(); 
	}

	render(){

		return(
			<section className="new-board-form" ref={this.formRef}>
				
				<label> 
					<h2>Title</h2><input onChange={this.handleChange("title")} value={this.state.title} type="text"/>
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