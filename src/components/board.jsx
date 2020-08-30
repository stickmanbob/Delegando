import React from "react";
import { connect } from "react-redux";
import Column from "./column";
import { createColumn, updateColumn } from "../actions/column_actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { updateBoard } from "../actions/board_actions";
import { useParams, withRouter } from "react-router-dom";

class Board extends React.Component {
  constructor(props) {
		super(props);
		this.createColumn = this.createColumn.bind(this);
		this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  renderColumns(columns) {
    return columns.map((col,idx) => {
      return <Column column={col} key={col.id} index={idx} boardId={this.props.board.id} />;
    });
  }

  createColumn() {
		let columnIds = Array.from(this.props.board.columns)
    let newColumn = {
      title: "New Column",
      notes: [],
    };

		columnIds.push(this.props.nextColId);
		this.props.createColumn(newColumn,{columns:columnIds, id: this.props.board.id});
	}
	
	handleDragEnd(result) {
		let allColumns = this.props.allColumns
		if(!result.destination) return;
		console.log(result); 
	
		if(result.type === "note"){

			let startIdx = Number(result.source.index);
			let endIdx = Number(result.destination.index);
			let noteId = Number(result.draggableId);

			if(result.source.droppableId === result.destination.droppableId){ //If dropping in the same column
				let columnId = Number(result.destination.droppableId);
				let notes = allColumns[columnId].notes;
				let newNotes = Array.from(notes);

				//Move the note in the source column
				newNotes.splice(startIdx, 1);
				newNotes.splice(endIdx, 0, noteId);

				//Update Redux with our new board state
				this.props.updateColumn({ id: columnId, notes: newNotes })

			}else{ // if moving columns
				let sourceColumn = Number(result.source.droppableId);
				let destColumn = Number(result.destination.droppableId);
				let sourceNotes = Array.from(allColumns[sourceColumn].notes);
				let destNotes = Array.from(allColumns[destColumn].notes);

				//Remove the Note from the source column
				sourceNotes.splice(startIdx,1);

				//Add the Note to the destination column
				destNotes.splice(endIdx,0,noteId);

				//Update Redux with the new board state
				this.props.updateColumn({id:sourceColumn, notes: sourceNotes});
				this.props.updateColumn({id:destColumn, notes: destNotes});
			}
		} else if(result.type ==="column"){
			let columnOrder = Array.from(this.props.board.columns);

			//column id's come from the result object in the form "c<id>", so we need to extract the id and parse
			let colId = Number(result.draggableId.slice(1));
			let source = result.source;
			let destination = result.destination;
			//If invalid drop, return
			if(!destination) return;

			let startIdx = source.index;
			let endIdx = destination.index;

			//move the columns
			columnOrder.splice(startIdx,1);
			columnOrder.splice(endIdx,0,colId);
			let newBoard = Object.assign({},this.props.board, {columns:columnOrder});

			this.props.updateBoard(newBoard);
		}
		
	}

  render() {
		
		let {board} = this.props;
    let columnsIds = this.props.board.columns;
    let columns = columnsIds.map((id) => this.props.allColumns[id]);
		
    return (
      <section className="board">
				<h1>{board.title}</h1>
        <button onClick={this.createColumn}>Add Column</button>
				<DragDropContext
					onDragEnd={this.handleDragEnd}
				>
					<Droppable droppableId={String(board.id)} direction="horizontal" type="column">
						{(provided) => 
        			<div className="columns"
							{...provided.droppableProps}
							ref = {provided.innerRef}
							>
								{provided.placeholder}
								{this.renderColumns(columns)}
								</div>
						}
					</Droppable>
				</DragDropContext>
      </section>
    );
  }
}

function mSTP(state, ownProps) {
	
  return {
    allColumns: Object.assign({},state.entities.columns),
    board: Object.assign({},state.entities.boards[ownProps.match.params.id]),
    nextColId: state.entities.columns.nextId,
  };
}

function mDTP(dispatch) {
  return {
		createColumn: (column,board) => dispatch(createColumn(column,board)),
		updateColumn: (column) => dispatch(updateColumn(column)),
		updateBoard: (board) => dispatch(updateBoard(board))
  };
}

export default withRouter( connect(mSTP, mDTP)(Board) );
