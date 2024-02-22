"use client";

import React, { useEffect, useState } from 'react'
import './Hero.scss'
import axios from 'axios';
import MovieContent from '@/components/MovieContent';
import MovieDate from '@/components/MovieDate';
import MovieTrailer from '@/components/MovieTrailer';
import MovieSwiper from '@/components/MovieSwiper';


const Hero = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovieData() {
            try {
                const res = await axios.get('http://localhost:3000/data/movieData.json');
                setMovies(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovieData();
    }, []);

    const handleSlideChange = id => {
        console.log(id);
        const newMovies=movies.map(movie=>{
            movie.active=false;
            if (movie._id===id) {
                movie.active=true;
            }
            return movie;
        });
        setMovies(newMovies);
    }

    // console.log(movies);


    return (
        <div className='Hero'>
            {
                movies && movies.length > 0 && movies.map(movie => (
                    <div className="movie">
                        <img src={movie.bgImg} alt="Background Image" className={`bgImg ${movie.active?'active':undefined}`} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-mid-12">
                                    <MovieContent movie={movie}/>
                                </div>
                                <div className="col-lg-6 col-mid-12">
                                    <MovieDate movie={movie}/>
                                    <MovieTrailer movie={movie}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                // movies && movies.length > 0 && <MovieSwiper slides={movies} />
                movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />
            }

        </div>
    )
}

export default Hero