import React, {Component} from 'react';
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
      <h1>Hello!</h1>
    )
  }
}

export default App;
