import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import User from '../../utils/images/user.jpg'
import './Header.css'
import {BsSearch} from 'react-icons/bs'
import { fetchMoviesAction } from '../../Redux/Actions/movieAction'
import { useDispatch } from 'react-redux'
import { fetchShowsAction } from '../../Redux/Actions/showAction'

const Header = () => {

    const [term,setTerm] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchMoviesAction(term))
        dispatch(fetchShowsAction(term))
        setTerm('')

        if(!term){
            return alert('please Enter a Movie or Show title')
        }
      }


    return (
        <div className='header'>
           
          
            <div className="logo">
            <Link to='/' className='home-link'>
                 Movie App 
            </Link>
            </div>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" className='search-input' value={term} placeholder='Search Movies or Shows' onChange={(e) => setTerm(e.target.value)} />
                    <button className='search-btn'><BsSearch className='search-icon'/></button>
                </form>
            </div>

            <div className="user-image">
                <img src={User} alt="user" />
            </div>
          
        </div>
    )
}




export default Header
