import React from 'react'
import './MovieSwiper.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

const MovieSwiper = ({ slides, slideChange }) => {
    return (
        <Swiper effect={'coverflow'} grabCursor={true} slidesPerView={'auto'} autoplay={{ delay: 2500, disableOnInteraction: false, }} coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} loop={true} modules={[Autoplay, EffectCoverflow]} className='movieSwiper'>
            {
                slides.map(slides => (
                    <SwiperSlide key={slides._id}>
                        <img src={slides.previewImg} alt="Preview IMage" onClick={() => slideChange(slides._id)} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSwiper