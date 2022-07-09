import React from 'react';
import Movie from './Movie'
import './MovieContainer.css'

const MovieContainer = ({movies, selectedMovie}) => {
    const allMovies = movies.map(movie => {
        return (
            <Movie 
            title={movie.title}
            img={movie.poster_path}
            key={movie.id}
            selectedMovie={selectedMovie}
            id={movie.id}
            />
        )
    })
    return (
        <div className='movies-container'>{allMovies}</div>
      )
}

export default MovieContainer;