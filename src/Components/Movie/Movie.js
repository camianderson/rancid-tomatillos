import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ title, img, id, selectedMovie }) => {
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: "none" }}>
      <div className="single-movie" id={id} onClick={() => selectedMovie(id)}>
        <img src={img} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Movie;
