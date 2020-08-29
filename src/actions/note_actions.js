export const CREATE_NOTE = "CREATE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
// export const DELETE_COLUMN_NOTES = "DELETE_COLUMN_NOTES"

export const createNote = (note, column) => {
  return {
    type: CREATE_NOTE,
    note: note,
    column: { notes: column.notes, id: column.id },
  };
};

export const removeNote = (id,columnId) => ({
  type: REMOVE_NOTE,
	noteId: id,
	columnId:columnId
});

// export const deleteColumnNotes = (noteIds) => {
// 	return {
// 		type: DELETE_COLUMN_NOTES,
// 		noteIds: noteIds
// 	}
// }

export const updateNote = (note) => {
  return {
    type: UPDATE_NOTE,
    note: {
      id: note.id,
      title: note.title,
      description: note.description,
      colId: note.colId,
    },
  };
};
