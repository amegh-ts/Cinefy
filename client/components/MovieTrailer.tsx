import React from 'react'
import { IoPlayOutline } from "react-icons/io5";

const MovieTrailer = () => {
    return (
        <div className="trailer d-flex align-items-center justify-content-center active">
            <a href="#" className="playBtn"><IoPlayOutline className='play-icon' /></a>
            <p>Watch Trailer</p>
        </div>
    )
}

export default MovieTrailer