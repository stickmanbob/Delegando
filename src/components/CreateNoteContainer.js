import { connect } from "react-redux";
import { createNote } from "../actions/note_actions";
import NoteForm from "./NoteForm";

const mSTP = (state, ownProps) => {
  return {};
};
  
const mDTP = (dispatch) => ({
	createNote: (note) => dispatch(createNote(note))
});

export default connect(mSTP, mDTP)(NoteForm);