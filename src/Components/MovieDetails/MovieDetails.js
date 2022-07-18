import React, { Component } from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../../apiCalls";

let genre;
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: "",
    };
  }

  componentDidMount = () => {
    getMovieDetails(this.props.id)
      .then((data) => {
        this.setState({ movie: data.movie });
        genre = data.movie.genres.join(" | ");
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <article
        className="movie-details-container"
        style={{ backgroundImage: `url(${this.state.movie.backdrop_path})` }}
      >
        <div className="info-mask">
          <div className="movie-details">
            <img
              className="movie-image"
              alt="movie poster"
              src={this.state.movie.poster_path}
            />
            <section>
              <div className="description">
                <h1>{this.state.movie.title}</h1>
                <p>{this.state.movie.overview}</p>
                <p>
                  ⭐ : {Number(this.state.movie.average_rating).toFixed(1)}/10
                </p>
                <p>Genre: {genre} </p>
                <p>Release Date: {this.state.movie.release_date}</p>
                <Link to={"/"}>
                  <button>Back</button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    );
  }
}

export default MovieDetails;