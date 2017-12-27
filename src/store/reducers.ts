export const initialState = {
    loaded: false,
    loading: false,
    data: [{label: 'Eat Pizza', complete: false}]
};

export function reducers(
    state = initialState,
    action: {type: string; payload: any}
) {
    switch(action.type){
        case 'ADD_TODO': {
            const todo = action.payload;
            const data = [... state.data, todo];
            return {
                ...state,
                data: data
            }
        }
    }
    return state;
}