import React from 'react';
import Movie from './Movie'

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
        <div className='movies-container'> 
          <h1>{allMovies}</h1>
        </div>
      )
}

export default MovieContainer;