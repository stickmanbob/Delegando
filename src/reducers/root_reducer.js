import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer"
import modalReducer from "./modal_reducer";

const RootReducer = combineReducers({
		entities: entitiesReducer,
		modal: modalReducer
});

export default RootReducer;
