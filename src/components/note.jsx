import React from "react";
import { removeNote } from "../actions/note_actions";
import { connect } from "react-redux";
import EditNoteContainer from "./edit_note_container";
import { Draggable } from "react-beautiful-dnd";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, showEdit: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  handleClick() {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  showEdit() {
    if (this.state.showEdit === false) {
      this.setState({ showEdit: true });
    } else {
      this.setState({ showEdit: false });
    }
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.removeNote(this.props.note.id, this.props.columnId);
  }

  render() {
    let description;

    if (this.state.show === true) {
      description = (
				<div className="note-des">
					
          <p  >
            {this.props.note.description}
          </p>

					<button onClick={this.showEdit}>Edit</button>
					
        </div>
      );
    } else {
      description = <div></div>;
		}
		
    let editForm;
    if (this.state.showEdit === true) {
      editForm = (
        <div>
          <EditNoteContainer note={this.props.note} showEdit={this.showEdit} />
        </div>
      );
    } else {
      editForm = (
        <div className="note-heading">
          <div onClick={this.handleDelete} className="delete-note">
            x
          </div>
          <h3 className="note-title" onClick={this.handleClick}>
            {this.props.note.title}
          </h3>
          {description}
        </div>
      );
    }

    
    return (
			<Draggable draggableId={String(this.props.note.id)} index={this.props.index}>
				{ (provided)=>
					<div className="note-item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
						{editForm}
					</div>
				}
			</Draggable>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {};
};

const mDTP = (dispatch) => ({
  removeNote: (noteId,columnId) => dispatch(removeNote(noteId,columnId)),
});

export default connect(mSTP, mDTP)(Note);
