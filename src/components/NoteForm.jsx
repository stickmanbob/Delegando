import React from 'react';
import { connect } from "react-redux";

class NoteForm extends React.Component {
	render(){
		return (
			<div className="create-note">
				<h2>Create Note</h2>
				<form className="create-form" action="">
					<label className="create-title">Title:</label>
					<input type="text"/>
					<label className="create-description">Description:</label>
					<textarea className="create-ta" cols="30" rows="10" placeholder="Expand here..."></textarea>
				</form>
			</div>
		)	
	}
}

const mSTP = (state, ownProps) => {
  return {};
};
  
const mDTP = (dispatch) => ({
	
});

export default connect(mSTP, mDTP)(NoteForm);