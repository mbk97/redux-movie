import { fetchMoviesFailure, fetchMoviesLoading, fetchMoviesSuccess } from "./actionType";
import { API_KEY,
   
} from "../../utils/api";
import axios from 'axios'


export const fetchMoviesAction = (term) =>{
    return async (dispatch) =>{
         
        dispatch(fetchMoviesLoading())

        try {
            const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${term}&type=movie`)


            const data = response.data
            console.log(data)

            dispatch(fetchMoviesSuccess(data))

        } catch (error) {

            dispatch(fetchMoviesFailure(error))
            
        }

    }
}