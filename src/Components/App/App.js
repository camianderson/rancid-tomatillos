import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import MovieContainer from "../MovieContainer/MovieContainer";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getMovieData } from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      selectedMovie: {},
    };
  }

  componentDidMount = () => {
    getMovieData()
      .then((data) => {
        this.setState({ movies: data.movies });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  selectedMovie = (id) => {
    const findMovie = this.state.movies.find((movie) => movie.id === id);
    this.setState({ ...this.state.movies, selectedMovie: findMovie });
  };

  render() {
    return (
      <main className="App">
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MovieContainer
                movies={this.state.movies}
                selectedMovie={this.selectedMovie}
              />
            )}
          />
          <Route
            exact
            path="/movies/:id"
            render={({ match }) => {
              const movieToRender = this.state.movies.find(
                (movie) => movie.id === parseInt(match.params.id)
              );
              return (
                <MovieDetails
                  selectedMovie={this.state.selectedMovie}
                  id={movieToRender.id}
                />
              );
            }}
          />
          <Route
            path="*"
            render={() => {
              return <Error />;
            }}
          />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;