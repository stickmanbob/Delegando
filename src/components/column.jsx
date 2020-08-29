import { connect } from "react-redux";
import React from "react";

import Note from "./note";
import CreateNoteContainer from "./CreateNoteContainer";
import { createNote, removeNote } from "../actions/note_actions";
import EditColumnForm from "./edit_column_form";

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
    const { notes, column } = this.props;
    let realNotes = notes.map((note) => {
      if (column.id === note.colId)
        return <Note note={note} colId={column.id}></Note>;
    });
    // debugger;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <CreateNoteContainer colId={column.id} />

        <EditColumnForm columnId={this.props.id} />
        <ul>{realNotes}</ul>
        <button onClick={this.addNote}>Add Note</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    notes: Object.values(state.entities.notes),
    column: state.entities.columns[ownProps.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeNote: (note) => dispatch(removeNote(note)),
  createNote: (note) => dispatch(createNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
