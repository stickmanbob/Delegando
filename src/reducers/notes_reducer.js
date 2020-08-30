import { CREATE_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "../actions/note_actions";
import { REMOVE_COLUMN } from "../actions/column_actions";
import { DELETE_BOARD } from "../actions/board_actions";

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
	let newState; 
  switch (action.type) {
    case CREATE_NOTE:
      let id = state.nextId;

      let note = Object.assign({}, action.note, { id: id });

      const newNote = { [id]: note };

      return Object.assign(nextState, state, newNote, { nextId: id + 1 });

    case REMOVE_NOTE:
			
      nextState = Object.assign({}, state);
      delete nextState[action.noteId];

      return nextState;
    case UPDATE_NOTE:
      return Object.assign({}, state, { [action.note.id]: action.note });

    case (REMOVE_COLUMN ):
			
      newState = Object.assign({}, state);
      action.noteIds.forEach((noteId) => {
        delete newState[noteId];
      });
			return newState;
		
		case DELETE_BOARD:
			newState = Object.assign({}, state);
			action.noteIds.forEach((noteId) => {
				delete newState[noteId];
			});
			return newState;
		

    default:
      return state;
  }
};

export default notesReducer;
