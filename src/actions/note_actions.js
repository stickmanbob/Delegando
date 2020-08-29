export const CREATE_NOTE = "CREATE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const createNote = (note, column) => {
  debugger;
  return {
    type: CREATE_NOTE,
    note: note,
    column: { notes: column.notes, id: column.id },
  };
};

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id: id,
});

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
