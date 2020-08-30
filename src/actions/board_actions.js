import note from "../components/note";

export const UPDATE_BOARD = "UPDATE_BOARD";
export const CREATE_BOARD = "CREATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";

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

export function deleteBoard(boardId, columnIds, noteIds){
	return {
		type:DELETE_BOARD,
		boardId: boardId,
		columnIds: columnIds,
		noteIds: noteIds
	}
}