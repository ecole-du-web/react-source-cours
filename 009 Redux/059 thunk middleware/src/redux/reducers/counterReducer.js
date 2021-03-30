const INITIAL_STATE = {
    count: 50
}

function CounterReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'INCR': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECR': {
            return {
                ...state,
                count: state.count - 1
            }
        }
    }


    return state;
}

export default CounterReducer;