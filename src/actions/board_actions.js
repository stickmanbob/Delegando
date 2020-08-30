export const UPDATE_BOARD = "UPDATE_BOARD";

export function updateBoard(board){
	return{
		type:UPDATE_BOARD,
		board:board
	}
}