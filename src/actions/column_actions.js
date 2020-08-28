export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const receiveNOTES = (notes) => ({
  type: RECEIVE_NOTES,
  notes,
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note,
});

export const removeNote = (note) => ({
  type: REMOVE_NOTE,
  note,
});
