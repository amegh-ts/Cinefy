import React from 'react'
import Button from './Button'
import { IoBookmarkOutline, IoAddOutline } from "react-icons/io5";

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
                <Button icon={<IoBookmarkOutline />} name="Book" color="#ff3700" bgColor="#ffffff" />
                <Button icon={<IoAddOutline />} name="My List" />
            </div>
        </div>
    )
}

export default MovieContent