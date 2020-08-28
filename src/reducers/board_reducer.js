
export default function boardReducer(state={},action){

    Object.freeze(state);

    switch(action.type){
        default:
            return state; 
    }
}