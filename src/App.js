import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Movie from './components/Movie'
import MoviesList from './components/MoviesList'

class App extends Component {
  render() {

    const moviesFromDatabase = [
      {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
      {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
      {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'},
    ]

    return (
        <div>
          <MoviesList movies={ moviesFromDatabase } />
        </div>
    )
  }
}

  export default App;
