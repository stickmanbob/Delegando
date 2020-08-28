

export default function boardReducer(state = {}, action) {

    Object.freeze(state);

    console.log(state);
    switch (action.type) {
        default:
            return state;
    }
}