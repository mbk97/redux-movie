import { fetchMovieShowDetailFailure, fetchMovieShowDetailLoading, fetchMovieShowDetailSuccess } from "./actionType";
import axios from "axios";
import { API_KEY } from "../../utils/api";



export const fetchMovieShowDetailAction = (id) =>{
    return async (dispatch) =>{
        dispatch(fetchMovieShowDetailLoading())

        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&Plot=full`)

            const data = response.data

            console.log(data)

            dispatch(fetchMovieShowDetailSuccess(data))
        } catch (error) {

            dispatch(fetchMovieShowDetailFailure(error))
            
        }
    }
}