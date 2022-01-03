import {  FETCH_SHOWS_SUCCESS } from "../Actions/actionType";

const initialState = {
    showsLoading:true,
    shows:[],
    showError:''
}


export const showReducer = (state = initialState, action) =>{
    switch(action.type){
        
        
        case FETCH_SHOWS_SUCCESS:
            return{
                ...state,
                shows:action.payload,
                showsLoading:false,
                error:''
            }

       


            default:return state
    }
}