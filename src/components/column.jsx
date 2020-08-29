import { connect } from "react-redux";
import React from "react";

import Note from "./note";
import CreateNoteContainer from "./create_note_container";
import { createNote, removeNote } from "../actions/note_actions";
import EditColumnForm from "./edit_column_form";
import { deleteColumn } from "../actions/column_actions";
import { Droppable } from "react-beautiful-dnd";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
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
    const { notes, column } = this.props;

    return notes.map((note, idx) => {
      if (column.id === note.colId)
        return <Note note={note} colId={column.id} key={idx} index={idx}></Note>;
    });
  }

  selectTitle() {
    if (this.state.showEdit) {
      return <EditColumnForm columnId={this.props.id} hide={this.hideEdit} />;
    } else {
      return <h2 onClick={this.showEdit}>{this.props.title}</h2>;
    }
	}
	
	deleteSelf(e){
		e.preventDefault(); 
		 console.log(this.props.column)
		this.props.deleteColumn(this.props.column.id, this.props.boardId, this.props.column.notes);

	}

  render() {
    const { column } = this.props;

    let title = this.selectTitle();

    return (
      <div>
        {title}
				<button onClick = {this.deleteSelf}>Delete</button>
        <CreateNoteContainer colId={column.id} />
				<Droppable droppableId={String(column.id)}>
					{ (provided)=>
						<div className="notes-list" {...provided.droppableProps} ref={provided.innerRef} >
							{provided.placeholder}
							<ul>{this.renderNotes()}</ul>
						</div>
						
					}		
				</Droppable>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: Object.values(state.entities.notes),
		column: state.entities.columns[ownProps.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeNote: (note) => dispatch(removeNote(note)),
	createNote: (note) => dispatch(createNote(note)),
	deleteColumn: (columnId, boardId, noteIds) => dispatch(deleteColumn(columnId,boardId,noteIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
