import React from 'react'

interface Movie {
    date: string;
    active?: boolean; // optional
  }
  
  interface MovieDateProps {
    movie: Movie;
  }
const MovieDate: React.FC<MovieDateProps> = ({movie}) => {
    return (
        <div className={`date ${movie.active ? 'active' : undefined}`}>
            <h2>On {movie.date}</h2>
        </div>
    )
}

export default MovieDate