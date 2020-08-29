export const CREATE_COLUMN = "CREATE_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";
export const UPDATE_COLUMN = "UPDATE_COLUMN";

export const createColumn = (column) => {
    return {
            type: CREATE_COLUMN,
            column:{
                title: column.title,
                notes: column.notes,
            }
    }
}

export const updateColumn = (column) => {
	return {
		type: UPDATE_COLUMN,
		column: {
			id: column.id,
			title: column.title,
			notes: column.notes,
		}
	}
}