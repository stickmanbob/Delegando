import { CREATE_NOTE, REMOVE_NOTE, UPDATE_NOTE,} from "../actions/note_actions";
import { REMOVE_COLUMN } from "../actions/column_actions"

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  // debugger;
  switch (action.type) {
    case CREATE_NOTE:
      let id = state.nextId;

      let note = Object.assign({}, action.note, { id: id });

      const newNote = { [id]: note };

      return Object.assign(nextState, state, newNote, { nextId: id + 1 });

    case REMOVE_NOTE:
      nextState = Object.assign({}, state);
      delete nextState[action.id];

      return nextState;
    case UPDATE_NOTE:
			return Object.assign({}, state, { [action.note.id]: action.note });
		
		case REMOVE_COLUMN:
			let newState = Object.assign({},state);
			action.nodeIds.forEach((noteId)=>{
				delete newState[noteId];
			})
			return newState; 

    default:
      return state;
  }
};

export default notesReducer;
