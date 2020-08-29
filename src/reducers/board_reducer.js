import { CREATE_COLUMN } from "../actions/column_actions";

export default function boardReducer(state = {}, action) {

    Object.freeze(state);

    
    switch (action.type) {
			
			case CREATE_COLUMN:
				const board = state[action.board.id];
				let newBoard = Object.assign({},board,action.board);

				return Object.assign({},state,{[action.board.id]: newBoard});

        default:
            return state;
    }
}