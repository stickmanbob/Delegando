import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import NewBoardForm from "./new_board_form";
import { deleteBoard } from "../actions/board_actions";
import Footer from "../components/footer";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreate: false,
    };

    this.createFormRef = React.createRef();

    this.deleteBoard = this.deleteBoard.bind(this);
    this.toggleCreateForm = this.toggleCreateForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    this.setState({
      showCreate: false,
    });
  }

  deleteBoard(board) {
    return (e) => {
      e.preventDefault();
      let columns = board.columns.map((id) => this.props.allColumns[id]);
      let notes = [];
      columns.forEach((column) => notes.push(...column.notes));

      let columnIds = Array.from(board.columns);
      this.props.deleteBoard(board.id, columnIds, notes);
    };
  }

  renderBoards() {
    let boardList = [];
    for (let boardId in this.props.boards) {
      if (boardId !== "nextId") boardList.push(this.props.boards[boardId]);
    }
    let boardLinks = boardList.map((board, idx) => {
      return (
        <div key={idx}>
          <span onClick={this.deleteBoard(board)}>x</span>
          <Link to={`/boards/${board.id}`}>
            <h2>{board.title}</h2>
          </Link>
        </div>
      );
    });
    return boardLinks;
  }

  toggleCreateForm() {
    this.setState({
      showCreate: !this.state.showCreate,
    });
  }
  render() {
    let createForm = null;
    if (this.state.showCreate) {
      createForm = <NewBoardForm hideForm={this.hideForm} />;
    }

    return (
      <div>
        <section className="board-index">
          <h1>
            All Boards
            {!this.state.showCreate && (
              <span
                className="add-board-button"
                onClick={this.toggleCreateForm}
              >
                +
              </span>
            )}
          </h1>

          {createForm}

          <div className="all-boards">{this.renderBoards()}</div>
        </section>
        <Footer />
      </div>
    );
  }
}

function mSTP(state) {
  return {
    boards: state.entities.boards,
    allColumns: state.entities.columns,
  };
}

function mDTP(dispatch) {
  return {
    deleteBoard: (boardId, columnIds, noteIds) =>
      dispatch(deleteBoard(boardId, columnIds, noteIds)),
  };
}

export default connect(mSTP, mDTP)(BoardIndex);
