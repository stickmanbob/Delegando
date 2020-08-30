export const UPDATE_BOARD = "UPDATE_BOARD";
export const CREATE_BOARD = "CREATE_BOARD";

export function updateBoard(board){
	return{
		type:UPDATE_BOARD,
		board:board
	}
}

export function createBoard(board){

	return{
		type:CREATE_BOARD,
		board: board
	}
}