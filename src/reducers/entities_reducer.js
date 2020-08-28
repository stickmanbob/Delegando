import { combineReducers } from "redux";
import boardReducer from './board_reducer';
import columnsReducer from './columns_reducer';
import notesReducer from './notes_reducer';

const entitiesReducer = combineReducers({
    boards: boardReducer,
    columns: columnsReducer,
    notes: notesReducer
});

export default entitiesReducer;