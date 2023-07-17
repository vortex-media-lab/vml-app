import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/App.scss';
import carouselData from '../utils/carouselData.json';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';

export default function Carrousel() {
  return (
    <>
      <div className='container flex align-middle content-center parallax'>
        <Swiper
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          autoplay={{
            delay: 8500,
            disableOnInteraction: true,
          }}
          effect={'fade'}
          navigation={true}
          loop={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className='mySwiper'
        >
          {carouselData.map((slide, index) => (
            <SwiperSlide key={index}>
              <a href={slide.videoUrl}>
                <img src={slide.image} alt='Vite logo' />
                <p className='titulo'>{slide.title}</p>
                <p>{slide.description}</p>
                <div className='overlay'>
                  <div className='text'>Ver el reel</div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

