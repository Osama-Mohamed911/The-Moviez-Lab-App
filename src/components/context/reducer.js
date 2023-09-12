import * as actions from "./ActionType";
export const reducer = (state , action)=>{
    switch (action.type){
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return{
                ...state,
                watchlist:[action.payload, ...state.watchlist],
            }
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return{
                ...state,
                watchlist:state.watchlist.filter(
                    (movie)=> movie.id !== action.payload
                )
            } 
        default:
            return state;
    }

}