import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
} from "../actions/column_actions";

const columnsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_NOTES:
      action.notes.forEach((note) => {
        nextState[note.id] = note;
      });
      return nextState;
    case RECEIVE_NOTE:
      const newNote = { [action.note.id]: action.note };
      return Object.assign({}, state, newNote);
    case REMOVE_NOTE:
      nextState = Object.assign({}, state);
      delete nextState[action.note.id];
      return nextState;
    default:
      return state;
  }
};

export default columnsReducer;
