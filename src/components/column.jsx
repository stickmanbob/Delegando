import { connect } from "react-redux";
import React from "react";

import Note from "./note";
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
    const { notes } = this.props;
		let realNotes = notes.map((note) => <Note note={note}></Note>);
		
    return (
      <div>
				<h2>{this.props.title}</h2>
				<EditColumnForm columnId={this.props.id}/>
        <ul>{realNotes}</ul>
        <button onClick={this.addNote}>Add Note</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: Object.values(state.entities.notes),
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeNote: (note) => dispatch(removeNote(note)),
  createNote: (note) => dispatch(createNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
