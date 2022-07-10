 import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieContainer from './MovieContainer';
import './App.css';
import MovieDetails from './MovieDetails';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      movies: [],
      isClicked: false,
      selectedMovie: {}
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({movies: data.movies})
    })
    .catch(error => console.log(error))
  }

  selectedMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({...this.state.movies, isClicked: true, selectedMovie: findMovie})
  }

  backButton = () => {
    this.setState({isClicked:false});
  }
 
  render(){
    return(
      <main className='App'>
        <Header />
        { !this.state.isClicked && <MovieContainer movies={this.state.movies} selectedMovie={this.selectedMovie}/> }
        { this.state.isClicked && <MovieDetails selectedMovie={this.state.selectedMovie} backButton={this.backButton}/> }
        <Footer />
      </main>
     )  
  }
}

export default App;
