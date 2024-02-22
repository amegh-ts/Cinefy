import React from 'react'
import { IoPlayOutline } from "react-icons/io5";
import Modal from './Modal';

const MovieTrailer = ({ movie }) => {
    return (
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
                <a href="#" className="playBtn"><IoPlayOutline className='play-icon' /></a>
                <p>Watch Trailer</p>
            </div>
            {
                movie.active && <Modal />
            }

        </>
    )
}

export default MovieTrailer