import React from "react";
import { connect } from "react-redux";
import Column from "./column";
import { createColumn } from "../actions/column_actions";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.createColumn = this.createColumn.bind(this);
  }

  renderColumns(columns) {
    return columns.map((col, idx) => {
      return <Column title={col.title} key={idx} id={col.id} />;
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

  render() {
    let columnsIds = this.props.board.columns;
    let columns = columnsIds.map((id) => this.props.allColumns[id]);

    return (
      <section className="board">
				<h1>{this.props.board.title}</h1>
        <button onClick={this.createColumn}>Add Column</button>
        <div className="columns">{this.renderColumns(columns)}</div>
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
  };
}

export default connect(mSTP, mDTP)(Board);
