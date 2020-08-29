import { connect } from "react-redux";
import React from "react";

import Note from "./note";
import CreateNoteContainer from "./CreateNoteContainer";
import { createNote, removeNote } from "../actions/note_actions";
import EditColumnForm from "./edit_column_form";

class Column extends React.Component {
  constructor(props) {
    super(props);
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
        <EditColumnForm columnId={this.props.id} />
        <CreateNoteContainer colId={column.id} />

        <ul>{realNotes}</ul>
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
