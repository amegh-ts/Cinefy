import React from 'react'
import Button from './Button'
import { IoBookmarkOutline, IoAddOutline } from "react-icons/io5";

interface Movie {
    titleImg: string;
    year: string;
    ageLimit: string;
    length: string;
    category: string;
    description: string;
    active?: boolean;
}

interface MovieContentProps {
    movie: Movie;
}

const MovieContent: React.FC<MovieContentProps> = ({ movie }) => {
    return (
        <div className={`content ${movie.active ? 'active' : undefined}`}>
            <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
            <h4>
                <span>{movie.year}</span>
                <span><i>{movie.ageLimit}</i></span>
                <span>{movie.length}</span>
                <span>{movie.category} </span>
            </h4>
            <p>{movie.description}</p>
            <div className="button">
                <Button icon={<IoBookmarkOutline />} name="Book" color="#ff3700" bgColor="#ffffff" />
                <Button icon={<IoAddOutline />} name="My List" />
            </div>
        </div>
    )
}

export default MovieContent