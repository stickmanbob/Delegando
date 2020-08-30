import {
  CREATE_COLUMN,
  UPDATE_COLUMN,
  REMOVE_COLUMN,
} from "../actions/column_actions";

import { CREATE_NOTE, REMOVE_NOTE } from "../actions/note_actions";
import { DELETE_BOARD } from "../actions/board_actions";

export default function columnsReducer(state = {}, action) {
  Object.freeze(state);
  let column;
	let newColumn; 
	let newState; 
  switch (action.type) {
    case CREATE_COLUMN:
      // First, let's get the next availible object id
      let id = state.nextId;

      // create our new column object
      column = Object.assign({}, action.column, { id: id });

      //Duplicate the current state and add our new column object
      return Object.assign(
        {},
        state,

        { [id]: column }, // Our new object, namespaced under its new id

        { nextId: id + 1 }
      ); //Increment the next availible id by 1

    case UPDATE_COLUMN:
				let colId = action.column.id
				let updatedCol = {
					...state[colId],
					...action.column
				}
      return Object.assign({}, state, { [action.column.id]: updatedCol });

    case REMOVE_COLUMN:
      newState = Object.assign({}, state);
      delete newState[action.columnId];
      return newState;
		
		case CREATE_NOTE:
      column = state[action.column.id];
			newColumn = Object.assign({}, column, action.column);

			return Object.assign({}, state, { [action.column.id]: newColumn });
			
		case REMOVE_NOTE:
			column = state[action.columnId];
			let newNotes = Array.from(column.notes);
			let noteIdx = newNotes.indexOf(action.noteId);
			newNotes.splice(noteIdx,1);
			newColumn = Object.assign({},column,{notes:newNotes});
			return Object.assign({},state,{[action.columnId]:newColumn});
		case DELETE_BOARD:
			newState = Object.assign({}, state);
			action.columnIds.forEach((columnId) => {
				delete newState[columnId];
			});
			return newState;

    default:
      return state;
  }
}
