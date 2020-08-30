import { connect } from "react-redux";
import React from "react";

import Note from "./note";
import CreateNoteContainer from "./create_note_container";
import { createNote, removeNote } from "../actions/note_actions";
import EditColumnForm from "./edit_column_form";
import { deleteColumn } from "../actions/column_actions";
import { Droppable, Draggable } from "react-beautiful-dnd";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showNoteEdit: false,
    };

    this.showEdit = this.showEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
    this.deleteSelf = this.deleteSelf.bind(this);
  }

  showEdit(e) {
    e.preventDefault();

    this.setState({
      showEdit: true,
    });
  }

  hideEdit() {
    this.setState({
      showEdit: false,
    });
  }

  renderNotes() {
    let notes = this.props.column.notes;

		return notes.map((noteId, idx) => {
			let note = this.props.allNotes[noteId]
     return (<Note note={note} key={note.id} columnId={this.props.column.id} index={idx}/>)
		}
		)
  }

  selectTitle() {
		let self = this.props.column;
    if (this.state.showEdit) {
      return <EditColumnForm columnId={self.id} hide={this.hideEdit} />;
    } else {
      return <h2 onClick={this.showEdit}>{self.title}</h2>;
    }
  }

  deleteSelf(e) {
    e.preventDefault();
    console.log(this.props.column);
    this.props.deleteColumn(
      this.props.column.id,
      this.props.boardId,
      this.props.column.notes
    );
  }

  render() {
    const { column } = this.props;

    let title = this.selectTitle();

    return (
			
			<Draggable draggableId={`c${column.id}`} index={this.props.index}>{ (provided) => 
				
				<div className="column"
				{...provided.draggableProps}
				ref={provided.innerRef}
				
				>
					<div className="delete-col" onClick={this.deleteSelf}>
						X
						</div>
					<div className="column-heading" {...provided.dragHandleProps}>
						{title}
					</div>

					<CreateNoteContainer colId={column.id} />

					<Droppable droppableId={String(column.id)} type="note">
						{ (provided)=>
							<div className="notes-list" {...provided.droppableProps} ref={provided.innerRef} >
								
								<ul>{this.renderNotes()}</ul>
								{provided.placeholder}
							</div>
							
						}		
					</Droppable>

				</div>
			
			}</Draggable>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allNotes: state.entities.notes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeNote: (note) => dispatch(removeNote(note)),
  createNote: (note) => dispatch(createNote(note)),
  deleteColumn: (columnId, boardId, noteIds) =>
    dispatch(deleteColumn(columnId, boardId, noteIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
