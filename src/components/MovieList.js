import React from 'react'
import Movie from './Movie'

const MovieList =(props) => {
    return (
        <div className="container">
            <div className = "row">
               <div className = "col s12">
                {
                 props.movies.map((movie, index)=>{
                     return (
                         <Movie key = {index} movieDetail={props.movieDetail} movieId = {movie.movieId} image = {movie.poster_path}/>
                     )
                 })

             }
            </div>
            </div>
        </div>
        
        
        
          )
}

export default MovieList;