import { connect } from "react-redux";
import NoteForm from "./NoteForm";

const mSTP = (state, ownProps) => {
  return {};
};
  
const mDTP = (dispatch) => ({
	updateNote: (note) => dispatch(updateNote(note))
});

export default connect(mSTP, mDTP)(NoteForm);