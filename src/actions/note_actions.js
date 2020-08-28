export const CREATE_NOTE = "CREATE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";


export const createNote = (note) => ({
  type: CREATE_NOTE,
  note: note
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id:id
});
