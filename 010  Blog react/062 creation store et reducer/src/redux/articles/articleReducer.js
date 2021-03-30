const INITIAL_STATE = {
    articles: []
}


function articleReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case "LOADARTICLES": {
            return {
                ...state,
                articles: action.payload
            }
        }
    }

    return state;
}
export default articleReducer;



export const getArticles = () => dispatch => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADARTICLES',
            payload: data
        })
    })

}

