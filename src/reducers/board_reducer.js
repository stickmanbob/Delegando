import { CREATE_COLUMN, REMOVE_COLUMN } from "../actions/column_actions";
import { UPDATE_BOARD, CREATE_BOARD, DELETE_BOARD } from "../actions/board_actions";

export default function boardReducer(state = {}, action) {

    Object.freeze(state);

		let board;
		let newBoard;
		let newState;
    switch (action.type) {

			case CREATE_BOARD:
				board = action.board;
				board.id = state.nextId;

				if(!board.columns) board.columns = []; 

				return Object.assign({},state,{[board.id]:board},{nextId:state.nextId+1});
			
			case CREATE_COLUMN:
				board = state[action.board.id];
				newBoard = Object.assign({},board,action.board);

				return Object.assign({},state,{[action.board.id]: newBoard});
			
			case REMOVE_COLUMN:
				board = state[action.boardId];
				let columnIds = Array.from(board.columns);
				let idx = columnIds.indexOf(action.columnId);
				columnIds.splice(idx,1);
				newBoard = Object.assign({},board,{columns: columnIds});
				return Object.assign({},state,{[newBoard.id]:newBoard})
			
			case UPDATE_BOARD:
				
				return Object.assign({},state,{[action.board.id]: action.board});
			
			case DELETE_BOARD:
				newState = Object.assign({},state);
				delete newState[action.boardId];
				return newState; 

      default:
            return state;
    }
}