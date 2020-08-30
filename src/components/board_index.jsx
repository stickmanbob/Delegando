import React from "react";
import {connect}from "react-redux";

import {Link} from "react-router-dom";
import NewBoardForm from "./new_board_form";
import { deleteBoard } from "../actions/board_actions";

class BoardIndex extends React.Component{

	constructor(props){
		super(props);

		this.deleteBoard = this.deleteBoard.bind(this);
	}

	deleteBoard(board){
		return (e) => {
			
			e.preventDefault();
			let columns = board.columns.map((id) => this.props.allColumns[id]);
			let notes = [];
			columns.forEach((column) => notes.push(...column.notes));
			
			let columnIds = Array.from(board.columns);
			this.props.deleteBoard(board.id, columnIds, notes);
		}

	}

	renderBoards(){
		let boardList = [];
		for(let boardId in this.props.boards){
			if(boardId !== "nextId") boardList.push(this.props.boards[boardId]);
		} 
		let boardLinks = boardList.map((board,idx)=>{
			
			return(
			<div key={idx}>
					<span onClick={this.deleteBoard(board)}>x</span>
					<Link to={`/boards/${board.id}`}><h2>{board.title}</h2></Link>
			</div>)
		})
		return boardLinks;  
	}

	render(){

		return(
		<section className="board-index">
			<h1>All Boards</h1>
			<NewBoardForm/>
			{this.renderBoards()}
		</section>
		)
	}
}

function mSTP(state){
	return {
		boards: state.entities.boards,
		allColumns: state.entities.columns
	}
}

function mDTP(dispatch){
	return{
		deleteBoard: (boardId,columnIds,noteIds) => dispatch(deleteBoard(boardId,columnIds,noteIds)),

	}
}

export default connect(mSTP,mDTP)(BoardIndex);