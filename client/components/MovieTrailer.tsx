import React, { useState } from 'react'
import { IoPlayOutline } from "react-icons/io5";
import Modal from './Modal';

interface Movie {
    active?: boolean;
    video: string;
    title: string;
}

interface MovieTrailerProps {
    movie: Movie;
}

const MovieTrailer: React.FC<MovieTrailerProps> = ({ movie }) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
                <a href="#" className="playBtn" onClick={toggleModal}><IoPlayOutline className='play-icon' /></a>
                <p>Watch Trailer</p>
            </div>
            {
                movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal} />
            }

        </>
    )
}

export default MovieTrailer