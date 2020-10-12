import React from 'react';
import { Component } from 'react';
import ShowPage from '../ShowPage/ShowPage.js';
import { Link, Route } from 'react-router-dom';

class MovieData extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies : data.movies }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className='movie-cards'>
        {this.state.movies.map((movie, index) => {
        return (
          <section className='movie-card' key={index}>
            <h1 className='movie-title Apps' key={movie.title}>
              {movie.title}
            </h1>
            <p className='movie-date'>
              {movie.release_date.substring(0,4)}
            </p>
            <img className='movie-poster' alt='movie-poster' src={movie.poster_path} />
            <h1 className='movie-rating'>{movie.average_rating.toFixed(1)}/10</h1>
            <button>Click Here for More Info: {movie.id}</button>
          </section>
        )
      })}
      </div>
    )
  }
}



export default MovieData;
