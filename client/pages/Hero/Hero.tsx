"use client";

import React, { useEffect, useState } from 'react'
import './Hero.scss'
import axios from 'axios';

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
                <img src="/assets/movies/bg-transformer.jpg" alt="Background Image" className='bgImg' />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-mid-12">
                            <div className="content">
                                <img src="Movie Title" alt="" className="movie-title" />
                                <h4>
                                    <span>Year</span>
                                    <span><i>age</i></span>
                                    <span>length</span>
                                    <span>category </span>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, atque officiis. Sint consequuntur illum sed consectetur quasi assumenda rem possimus, distinctio illo blanditiis sapiente perspiciatis exercitationem reprehenderit quisquam quam asperiores.
                                </p>
                                <div className="button">Button</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-mid-12">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero