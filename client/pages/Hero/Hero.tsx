"use client";

import React, { useEffect, useState } from 'react'
import './Hero.scss'
import axios from 'axios';
import { IoPlayOutline } from "react-icons/io5";
import MovieContent from '@/components/MovieContent';


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

    console.log(movies);


    return (
        <div className='Hero'>
            <div className="movie">
                <img src="/assets/movies/bg-transformer.jpg" alt="Background Image" className='bgImg active' />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-mid-12">
                            <MovieContent/>
                        </div>
                        <div className="col-lg-6 col-mid-12">
                            

                            <div className="trailer d-flex align-items-center justify-content-center active">
                                <a href="#" className="playBtn"><IoPlayOutline className='play-icon'/></a>
                                <p>Watch Trailer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero