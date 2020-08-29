import { CREATE_NOTE, REMOVE_NOTE } from "../actions/note_actions";

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

    default:
      return state;
  }
};

export default notesReducer;
