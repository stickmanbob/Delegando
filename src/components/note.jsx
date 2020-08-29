import React from "react";
import { removeNote } from "../actions/note_actions";
import { connect } from "react-redux";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick() {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.removeNote(this.props.note.id);
  }

  render() {
    let description;

    if (this.state.show === true) {
      description = (
        <div>
          <p>{this.props.note.description}</p>
        </div>
      );
    } else {
      description = <div></div>;
    }
    return (
      <div className="note-item">
        <div onClick={this.handleClick} className="note-display">
          <h3 className="note-title">{this.props.note.title}</h3>

          {description}
        </div>
        <span onClick={this.handleDelete} className="delete-note">
          x
        </span>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {};
};

const mDTP = (dispatch) => ({
  removeNote: (id) => dispatch(removeNote(id)),
});

export default connect(mSTP, mDTP)(Note);
