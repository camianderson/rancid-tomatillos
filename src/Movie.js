import React from 'react';
import './Movie.css'


const Movie = ({title, img, id, selectedMovie}) => {
    return (
        <div className='single-movie' id={id} onClick={() => selectedMovie(id)}>
            <img src={img} />
            <p>{title}</p>
        </div>
    )
}

export default Movie;