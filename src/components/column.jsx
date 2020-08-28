import { connect } from "react-redux";
import React from "react";

import { createNote, removeNote } from "../actions/note_actions";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    this.props.createNote({ title: "demo" });
  }

  render() {
    // debugger;
    const { notes } = this.props;
    let realNotes = notes.forEach((note) => {
      return <div>{note.title}</div>;
    });
    debugger;
    return (
      <div>
        <ul>{realNotes}</ul>
        <button onClick={this.addNote}>Add Note</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //   debugger;
  return {
    notes: Object.values(state.entities.notes),
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeNote: (note) => dispatch(removeNote(note)),
  createNote: (note) => dispatch(createNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
