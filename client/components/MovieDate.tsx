import React from 'react'

const MovieDate = ({movie}) => {
    return (
        <div className={`date ${movie.active ? 'active' : undefined}`}>
            <h2>{movie.date}</h2>
        </div>
    )
}

export default MovieDate