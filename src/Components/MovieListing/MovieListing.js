import React, {useEffect} from 'react'
import './movieListing.css'
import { connect } from 'react-redux'
import { fetchMoviesAction } from '../../Redux/Actions/movieAction'
import MovieCard from '../MovieCard/MovieCard'
import errorImg from '../../utils/images/error.gif'
import loadingImg from '../../utils/images/loading.gif'
import Slider from "react-slick";
import { settings } from '../../utils/settings'
import { fetchShowsAction } from '../../Redux/Actions/showAction'

const MovieListing = ({movieData,fetchMoviesAction,showData,fetchShowsAction}) => {
    const movieText = 'harry'
    const showText = 'friends'


    useEffect(() =>{
        fetchMoviesAction(movieText)
        fetchShowsAction(showText)
      },[])
   

    const {movies,loading,error} = movieData
    const {shows} = showData

    let renderMovies,renderShows = ''
    
    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie,index) => {
            return <MovieCard key={index} data={movie}/>
        })
    ) : (
        <div className='movie-error'>
              <p>{movies.Error}</p>
        </div>
    )

    renderShows = shows.Response === "True" ? (
        shows.Search.map((show,index) =>{
            return(
                <MovieCard key={index} data={show}/>
                )
            })
    ) 
    : ( <div className='movie-error'>
       <p>{shows.Error}</p>
     </div>
     )


  
    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h4>Movies</h4>
                <div className="loading-container">
                     {error && !loading && <img src={errorImg} className='error-img' alt="" />}
                   {loading && <img src={loadingImg} className='loading-img' alt="" />}
                </div>
                <div className="movie-container">
                    <Slider {...settings}>
                             {renderMovies}
                    </Slider>
                </div>
            </div>
            


            <div className="movie-list">
                <h4>Shows</h4>
                 <div className="loading-container">
                   {error && !loading && <img src={errorImg} className='error-img' alt="" />}
                   {loading && <img src={loadingImg} className='loading-img' alt="" />}
                </div>
                 <div className="movie-container">
                    <Slider {...settings}>
                             {renderShows}
                    </Slider>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        movieData:state.movies,
        showData:state.shows
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchMoviesAction: (movieText) => dispatch(fetchMoviesAction(movieText)),
        fetchShowsAction:(showText) => dispatch(fetchShowsAction(showText))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)( MovieListing)
