import {
  CREATE_COLUMN,
  UPDATE_COLUMN,
  REMOVE_COLUMN,
} from "../actions/column_actions";

export default function columnsReducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case CREATE_COLUMN:
      // First, let's get the next availible object id
      let id = state.nextId;

      // create our new column object
      let column = Object.assign({}, action.column, { id: id });
			
      //Duplicate the current state and add our new column object
      return Object.assign(
        {},
        state,

        { [id]: column }, // Our new object, namespaced under its new id

        { nextId: id + 1 }
      ); //Increment the next availible id by 1

    case UPDATE_COLUMN:
      return Object.assign({}, state, { [action.column.id]: action.column });
    default:
      return state;
  }
}
