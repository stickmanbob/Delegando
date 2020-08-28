import { RECEIVE_COLUMN } from "../actions/board_actions"

export default function boardReducer(state={},action){

    Object.freeze(state);
    
    console.log(state); 
    switch(action.type){
        case RECEIVE_COLUMN:
            let id = state.currentId;
            return Object.assign({}, state, {[id]: action.column}, {currentId:id+1})
        default:
            return state; 
    }
}