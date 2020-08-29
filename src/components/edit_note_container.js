import { connect } from "react-redux";
import EditNoteForm from "./edit_note_form";
import { updateNote } from "../actions/note_actions";

const mSTP = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.note.id],
  };
};

const mDTP = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note)),
});

export default connect(mSTP, mDTP)(EditNoteForm);
