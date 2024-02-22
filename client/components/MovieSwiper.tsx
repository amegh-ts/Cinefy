// import React from 'react'
// import './MovieSwiper.scss'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import SwiperCore from 'swiper';

// SwiperCore.use([Autoplay, EffectCoverflow]);

// interface Slide {
//     _id: string;
//     previewImg: string;
// }

// interface MovieSwiperProps {
//     slides: Slide[];
//     slideChange: (id: string) => void;
// }

// const MovieSwiper: React.FC<MovieSwiperProps> = ({ slides, slideChange }) => {
//     return (
//         <Swiper effect={'coverflow'} grabCursor={true} slidesPerView={'auto'} autoplay={{ delay: 2500, disableOnInteraction: false, }} coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} loop={true} modules={[Autoplay, EffectCoverflow]} className='movieSwiper'>
//             {
//                 slides.map(slides => (
//                     <SwiperSlide key={slides._id}>
//                         <img src={slides.previewImg} alt="Preview IMage" onClick={() => slideChange(slides._id)} />
//                     </SwiperSlide>
//                 ))
//             }
//         </Swiper>
//     )
// }

// export default MovieSwiper

import React from 'react';
import './MovieSwiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Autoplay, EffectCoverflow]);

interface Movie {
    _id: string;
    bgImg: string;
    active: boolean;
    titleImg: string;
    year: string;
    ageLimit: string;
    length: string;
    category: string;
    description: string;
    date: string;
    video: string;
    title: string;
}

interface MovieSwiperProps {
    slides: Movie[]; // Change type to Movie[]
    slideChange: (id: string) => void;
}

const MovieSwiper: React.FC<MovieSwiperProps> = ({ slides, slideChange }) => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={'auto'}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
            loop={true}
            className='movieSwiper'
        >
            {slides.map(movie => (
                <SwiperSlide key={movie._id}>
                    <img src={movie.bgImg} alt="Preview Image" onClick={() => slideChange(movie._id)} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MovieSwiper;
