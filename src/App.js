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
      movies: movieData.movies
    }
  }
  render(){
    return(
      <main className='App'>
        <Header />
        <MovieContainer movies={this.state.movies} />
        <Footer />
      </main>
     )
  }
}

export default App;
