import { connect } from "react-redux";
import { createNote } from "../actions/note_actions";
import NoteForm from "./NoteForm";

const mSTP = (state, ownProps) => {
  return {
    allNotes: Object.assign({}, state.entities.notes),
    column: Object.assign({}, state.entities.columns[ownProps.colId]),
    nextNoteId: state.entities.notes.nextId,
  };
};

const mDTP = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note)),
});

export default connect(mSTP, mDTP)(NoteForm);
