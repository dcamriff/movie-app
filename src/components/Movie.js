import React, { Component } from 'react'

import MoviesList from './MoviesList.js'

class Movie extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
          <div>Rating: {this.props.rating}</div>
          <div>Description: {this.props.description}</div>
        </div>
      </div>
    )
  }
}

export default Movie 