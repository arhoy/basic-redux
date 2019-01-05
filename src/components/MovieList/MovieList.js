import React, { Component } from 'react';

class MovieList extends Component {
    
    
    renderMovies = (movies) => (
        movies ?
        movies.map(movie=>(
            <div key = {movie.name}> {movie.name} </div>
        ))
        : 
        null
    )
    render() {
        const movies = this.props.data;
        console.log(movies);
        return (
            movies ? 
            <div>
                {this.renderMovies(movies)}
            </div>
            :null
        );
    }
}

export default MovieList;