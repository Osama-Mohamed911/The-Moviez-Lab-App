import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import * as actions from "../components/context/ActionType"


const WatchMovie = ({movie}) => {
    const MovieContext = useMovieContext();
  return (  
                <div className='card'>
                    <button className='trash' onClick={()=> MovieContext.moviesDispatch({
                        type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                        payload: movie.id
                    })}><i class="fa-solid fa-minus"></i></button>
             <img src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path} alt="movie" className="img-fluid"/>
                </div>
  )
}

export default WatchMovie