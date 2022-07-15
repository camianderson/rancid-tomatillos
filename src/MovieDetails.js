import React, {Component} from 'react';
import './MovieDetails.css'
import { Link } from 'react-router-dom';
import { getMovieDetails } from './apiCalls';

let genre;
class MovieDetails extends Component {
    constructor() {
        super()
        this.state = {
            movie: ''
        }
    }

    componentDidMount = () => {
        getMovieDetails(this.props.id)
        .then(data => {
          this.setState({movie: data.movie})
          genre = data.movie.genres.join(', ')
        })
        .catch(error => {
          this.setState({error: error.message})
        })
      } 
    
      
    render() {
        
        return (
            <div className='movie-details'>
                <img className='movie-image' src={this.state.movie.poster_path}/>
                <section>
                    <h1>{this.state.movie.title}</h1>
                    <p>{this.state.movie.overview}</p>
                    <p>Rating: {this.state.movie.average_rating}</p>
                    <p>Genre: {genre} </p>
                    <p>Release Date: {this.state.movie.release_date}</p>
                   <Link to={'/'}>
                   <button>Back</button>
                   </Link>
                </section>
            </div>
        )
    }
    
}

export default MovieDetails;

// movie:
// average_rating: 6.875
// backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"
// budget: 0
// genres: ['Action']
// id: 694919
// overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
// poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
// release_date: "2020-09-29"
// revenue: 0
// runtime: 82
// tagline: ""
// title: "Money Plane"