export const FETCH_MOVIES_LOADING = "FETCH_MOVIES_LOADING"
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS"
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE"


export const FETCH_SHOWS_SUCCESS = "FETCH_SHOWS_SUCCESS"


export const SHOW_MOVIE_DETAIL_LOADING ='SHOW_MOVIE_DETAIL_LOADING'
export const SHOW_MOVIE_DETAIL_SUCCESS ='SHOW_MOVIE_DETAIL_SUCCESS'
export const SHOW_MOVIE_DETAIL_FAILURE ='SHOW_MOVIE_DETAIL_FAILURE'

export const REMOVE_SELECTED_MOVIE_SHOW ='REMOVE_SELECTED_MOVIE_SHOW'



// movies

export const fetchMoviesLoading = () => ({
    type:FETCH_MOVIES_LOADING
}) 


export const fetchMoviesSuccess = (data) => ({
    type:FETCH_MOVIES_SUCCESS,
    payload:data
})


export const fetchMoviesFailure = (error) => ({
    type:FETCH_MOVIES_FAILURE,
    payload:error
})


// show actions
export const fetchShowsSuccess = (data) => ({
    type:FETCH_SHOWS_SUCCESS,
    payload:data
})



// movie-show detail actions
export const fetchMovieShowDetailLoading = () => ({
    type:SHOW_MOVIE_DETAIL_LOADING
})


export const fetchMovieShowDetailSuccess = (data) => ({
    type:SHOW_MOVIE_DETAIL_SUCCESS,
    payload:data
})


export const fetchMovieShowDetailFailure = (error) => ({
    type:SHOW_MOVIE_DETAIL_FAILURE,
    payload:error
})


//removing selected movie or shows
export const removeSelectedMovieOrShow = () => ({
    type:REMOVE_SELECTED_MOVIE_SHOW
})
