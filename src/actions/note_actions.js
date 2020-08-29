export const CREATE_NOTE = "CREATE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
// export const DELETE_COLUMN_NOTES = "DELETE_COLUMN_NOTES"

export const createNote = (note) => ({
  type: CREATE_NOTE,
  note: note,
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id: id,
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
