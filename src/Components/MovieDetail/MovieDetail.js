import React,{useEffect} from 'react'
import './MovieDetail.css'
import { connect } from 'react-redux'
import { fetchMovieShowDetailAction } from '../../Redux/Actions/movieShowDetailAction'
import {useParams} from 'react-router'
import {AiFillStar,} from 'react-icons/ai'
import { BsFillHandThumbsUpFill, BsFilm,BsFillCalendar2DateFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeSelectedMovieOrShow } from '../../Redux/Actions/actionType'

const MovieDetail = ({fetchMovieShowDetailAction,movieShowDetail}) => {

    const data = movieShowDetail.details
    const loading = movieShowDetail.loading
    const error = movieShowDetail.error

    // console.log(data.Title)

    const {Title,imdbRating,imdbVotes,imdbRuntime,Year,Plot,Director,Genre,Actors,Language,Awards,Poster} = data

    const dispatch = useDispatch()

  const {imdbID} = useParams();

  useEffect(() =>{
      fetchMovieShowDetailAction(imdbID)

      return () =>{
        dispatch(removeSelectedMovieOrShow())
    }
  },[imdbID,dispatch])


    return (
        <div className='movie-section'>

        <div className="error-loading-container">
           {error && <p>{error.message}</p>}
           {loading && <p>Loading...</p>}
        </div>
           

           {!error && !loading && 
            <div className='movie-section-wrapper'>
                <div className="section-left">
               <div className="movie-title">
                   {Title}
               </div>
               <div className="movie-rating">
                   <span>
                   IMDB Rating <AiFillStar className='rating-icon'/> {imdbRating}
                   </span>

                   <span>
                   IMDB Votes <BsFillHandThumbsUpFill className='rating-icon'/> {imdbVotes}
                   </span>

                   <span>
                  Runtime <BsFilm className='rating-icon'/> {imdbRuntime}
                   </span>

                   <span>
                   Year <BsFillCalendar2DateFill className='rating-icon'/> {Year}
                   </span>
               </div>

                   <div className="movie-plot">
                      
                       <p> {Plot}</p>
                   </div>

                   <div className="movie-info">
                      <div>
                          <span>Director</span>
                            <span>{Director}</span>
                      </div>

                      <div>
                          <span>Stars</span>
                            <span>{Actors}</span>
                      </div>

                      <div>
                          <span>Genres</span>
                            <span>{Genre}</span>
                      </div>

                      
                      <div>
                          <span>Languages</span>
                            <span>{Language}</span>
                      </div>

                      <div>
                          <span>Awards</span>
                            <span>{Awards}</span>
                      </div>
                   </div>

            </div>


            <div className="section-right">
                <img src={Poster} alt={Title} />
            </div>

            </div>
           
           
           }

        </div>
    )
}


const mapStateToProps = (state) =>{
    return{
       movieShowDetail:state.details
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        fetchMovieShowDetailAction:(imdbID) => dispatch(fetchMovieShowDetailAction(imdbID))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (MovieDetail)
