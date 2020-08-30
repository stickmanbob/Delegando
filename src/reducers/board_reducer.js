import { CREATE_COLUMN, REMOVE_COLUMN } from "../actions/column_actions";
import { UPDATE_BOARD } from "../actions/board_actions";

export default function boardReducer(state = {}, action) {

    Object.freeze(state);

		let board;
		let newBoard;
    switch (action.type) {
			
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

      default:
            return state;
    }
}