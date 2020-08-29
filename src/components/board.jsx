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

		if(!result.destination) return;
		console.log(result); 
		let columnId = Number(result.destination.droppableId);
		let notes = this.props.allColumns[columnId].notes;
		let startIdx = Number(result.source.index);
		let endIdx = Number(result.destination.index);
		let newNotes = Array.from(notes);
		let noteId = Number(result.draggableId);

		newNotes.splice(startIdx,1);
		newNotes.splice(endIdx,0,noteId);
		
		this.props.updateColumn({id:columnId, notes:newNotes})
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
