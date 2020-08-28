import { CREATE_COLUMN } from "../actions/column_actions"

export default function columnsReducer(state={},action){

    Object.freeze(state);
    
    console.log(state); 
    switch(action.type){
        case CREATE_COLUMN:
            // First, let's get the next availible object id
            let id = state.nextId;

            //Duplicate the current state and add our new column object
            return Object.assign(
                {}, 
                state, 
                
                {[id]: action.column}, // Our new object, namespaced under its new id
                
                {nextId:id+1}) //Increment the next availible id by 1
        default:
            return state; 
    }
}