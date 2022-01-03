import { SHOW_MOVIE_DETAIL_FAILURE, SHOW_MOVIE_DETAIL_LOADING, SHOW_MOVIE_DETAIL_SUCCESS, REMOVE_SELECTED_MOVIE_SHOW} from "../Actions/actionType";


const initialState = {
    loading:true,
    error:'',
    details:{}
}



export const movieShowDetailReducer = (state= initialState,action) =>{


    switch(action.type){
        case SHOW_MOVIE_DETAIL_LOADING:
            return{
                ...state,
                loading:true
            }

        case SHOW_MOVIE_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                details:action.payload
            }

        case SHOW_MOVIE_DETAIL_FAILURE:
            return{
                ...state,
                error:action.payload
            }

        case REMOVE_SELECTED_MOVIE_SHOW:
            return{
            ...state,
            details:{}
        }


            default: return state
    }




}