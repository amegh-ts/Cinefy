import React from 'react'

const MovieContent = () => {
    return (
        <div className="content active">
            <img src="/assets/movies/transformer-title.png" alt="Movie Title" className="movie-title" />
            <h4>
                <span>Year</span>
                <span><i>age</i></span>
                <span>length</span>
                <span>category </span>
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, atque officiis. Sint consequuntur illum sed consectetur quasi assumenda rem possimus, distinctio illo blanditiis sapiente perspiciatis exercitationem reprehenderit quisquam quam asperiores.
            </p>
            <div className="button">
                <a href="#" className="mainBtn">Button</a>
            </div>
        </div>
    )
}

export default MovieContent