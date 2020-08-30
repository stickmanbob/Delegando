export const CREATE_COLUMN = "CREATE_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";
export const UPDATE_COLUMN = "UPDATE_COLUMN";

export const createColumn = (column,board) => {
    return {
            type: CREATE_COLUMN,
            column:{
                title: column.title,
                notes: column.notes,
						},
						board:{
							columns: board.columns,
							id: board.id 
						}
    }
}

export const updateColumn = (column) => {
	return {
		type: UPDATE_COLUMN,
		column: column 
		}
}

export const deleteColumn = (columnId,boardId, noteIds) => {
	return {
		type: REMOVE_COLUMN,
		columnId: columnId,
		boardId: boardId,
		noteIds: noteIds
	}
}
