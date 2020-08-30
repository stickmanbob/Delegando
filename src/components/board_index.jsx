import React from "react";
import {connect}from "react-redux";

import {Link} from "react-router-dom";
import NewBoardForm from "./new_board_form";

class BoardIndex extends React.Component{

	renderBoards(){
		let boardList = Object.values(this.props.boards);
		let boardLinks = boardList.map((board)=>{
			return(
			<div>
				
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
		boards: state.entities.boards
	}
}

function mDTP(dispatch){
	return{

	}
}

export default connect(mSTP,null)(BoardIndex);