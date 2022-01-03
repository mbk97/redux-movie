import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { movieShowDetailReducer } from "./movieShowDetailReducer";
import { showReducer } from "./showReducer";


export const rootReducer = combineReducers({
    movies:movieReducer,
    details:movieShowDetailReducer,
    shows:showReducer
})