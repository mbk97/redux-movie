import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_LOADING, FETCH_MOVIES_SUCCESS } from "../Actions/actionType";



const initialState ={
    movies:[],
    loading:true,
    error:''
}



export const movieReducer = (state = initialState,action) =>{
    switch(action.type){
       case FETCH_MOVIES_LOADING:
           return {...state,
            loading:true,
            error:'',
            movies:[]
    }
       case FETCH_MOVIES_SUCCESS:
           return {...state,
            loading:false,
            error:'',
            movies:action.payload
    }
       case FETCH_MOVIES_FAILURE:
           return {...state,
            loading:false,
            error:action.payload,
            movies:[]
    }

    default: return state
    }
}