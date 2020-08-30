import React from "react";
import { connect } from "react-redux";
import Column from "./column";
import { createColumn, updateColumn } from "../actions/column_actions";
import { DragDropContext } from "react-beautiful-dnd";

class Board extends React.Component {
  constructor(props) {
		super(props);
		this.createColumn = this.createColumn.bind(this);
		this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  renderColumns(columns) {
    return columns.map((col) => {
      return <Column column={col} key={col.id} boardId={this.props.board.id} />;
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
			let sourceNotes = allColumns[sourceColumn].notes;
			let destNotes = allColumns[destColumn].notes;

			//Remove the Note from the source column
			sourceNotes.splice(startIdx,1);

			//Add the Note to the destination column
			destNotes.splice(endIdx,0,noteId);

			//Update Redux with the new board state
			this.props.updateColumn({id:sourceColumn, notes: sourceNotes});
			this.props.updateColumn({id:destColumn, notes: destNotes});
		}
		
	}

  render() {
    let columnsIds = this.props.board.columns;
    let columns = columnsIds.map((id) => this.props.allColumns[id]);
		
    return (
      <section className="board">
				<h1>{this.props.board.title}</h1>
        <button onClick={this.createColumn}>Add Column</button>
				<DragDropContext
					onDragEnd={this.handleDragEnd}
				>
        	<div className="columns">{this.renderColumns(columns)}</div>
				</DragDropContext>
      </section>
    );
  }
}

function mSTP(state, ownProps) {
  return {
    allColumns: Object.assign({},state.entities.columns),
    board: Object.assign({},state.entities.boards[ownProps.boardId]),
    nextColId: state.entities.columns.nextId,
  };
}

function mDTP(dispatch) {
  return {
		createColumn: (column,board) => dispatch(createColumn(column,board)),
		updateColumn: (column) => dispatch(updateColumn(column))
  };
}

export default connect(mSTP, mDTP)(Board);
