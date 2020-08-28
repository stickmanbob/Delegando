export const RECEIVE_COLUMN = "RECEIVE_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";

export const receiveColumn = (column) => {
    return {
            type: RECEIVE_COLUMN,
            column:{
                title: column.title,
                notes: [],
            }
    }
}