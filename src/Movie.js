import React from 'react';

const Movie = ({title, img}) => {
    return (
        <div className='single-movie'>
            <img src={img} />
            <p>{title}</p>
        </div>
    )
}

export default Movie;