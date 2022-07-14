import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieContainer from './MovieContainer';
import MovieDetails from './MovieDetails';
import './App.css';
import { Route } from 'react-router-dom';
import {getMovieData }from './apiCalls'

class App extends Component {
  constructor(){
    super();
    this.state = { 
      movies: [],
      error:'',
      isClicked: false,
      selectedMovie: {}
    }
  }

  componentDidMount = () => {
    getMovieData()
    .then(data => {
      this.setState({movies: data.movies})
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  selectedMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({...this.state.movies, isClicked: true, selectedMovie: findMovie})
  }
 
  render(){
    return(
      <main className='App'>
        <Header />
        { this.state.error && <h2>{this.state.error}</h2>}
        <Route 
          exact path='/' 
          render={() => (
          <MovieContainer movies={this.state.movies} selectedMovie={this.selectedMovie}/> )}
        />
        <Route
          exact path='/movies/:id'
          render={({match}) => {
            const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
              return <MovieDetails selectedMovie={this.state.selectedMovie}/>
            }
          }/>
        <Footer />
      </main>
     )  
  }
}

export default App;
