 import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieContainer from './MovieContainer';
import movieData from './movieData';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      movies: movieData.movies,
      isClicked: false
    }
  }
  selectedMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id);
    console.log(findMovie)
  }
 
  render(){
    return(
      <main className='App'>
        <Header />
        { !this.state.isClicked && <MovieContainer movies={this.state.movies} selectedMovie={this.selectedMovie}/> }
        <Footer />
      </main>
     )  
  }
}

export default App;
