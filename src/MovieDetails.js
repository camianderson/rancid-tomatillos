import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({selectedMovie}) => {
    return (
        <div className='movie-details'>
            <img className='movie-image' src={selectedMovie.poster_path}/>
            <section>
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.average_rating}</p>
        
                <button>Back</button>
            </section>
        </div>
    )
}

export default MovieDetails;