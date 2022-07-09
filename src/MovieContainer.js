import React from 'react';
import Movie from './Movie'
import './MovieContainer.css'

const MovieContainer = ({movies}) => {
    const allMovies = movies.map(movie => {
        return (
            <Movie 
            title={movie.title}
            img={movie.poster_path}
            key={movie.id}
            />
        )
    })
    return (
        <div className='movies-container'>{allMovies}</div>
      )
}

export default MovieContainer;