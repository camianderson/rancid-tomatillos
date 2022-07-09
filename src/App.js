 import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieContainer from './MovieContainer';
import movieData from './movieData';
import './App.css';
import MovieDetails from './MovieDetails';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      movies: movieData.movies,
      isClicked: false,
      selectedMovie: {}
    }
  }
  selectedMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({...this.state.movies, isClicked: true, selectedMovie: findMovie})
  }
 
  render(){
    return(
      <main className='App'>
        <Header />
        { !this.state.isClicked && <MovieContainer movies={this.state.movies} selectedMovie={this.selectedMovie}/> }
        { this.state.isClicked && <MovieDetails selectedMovie={this.state.selectedMovie}/> }
        <Footer />
      </main>
     )  
  }
}

export default App;
