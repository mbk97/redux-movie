import { 
        fetchShowsSuccess
} from "./actionType";
import axios from "axios";
import { API_KEY } from "../../utils/api";



export const fetchShowsAction = (term) =>{
    return async (dispatch) =>{

       try {

        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${term}&type=series`)

        const data = response.data
        console.log(data)
         
           dispatch(fetchShowsSuccess(data))
       } catch (error) {
       }
    }
}