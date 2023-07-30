import React from 'react';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import '../styles/App.scss';

import carouselData from '../utils/carouselData.json';

// Import required Swiper modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';

export default function Carrousel() {
  const swiperSettings = {
    spaceBetween: 30,
    pagination: { type: 'fraction' },
    autoplay: {
      delay: 8500,
      disableOnInteraction: true,
    },
    effect: 'fade',
    navigation: true,
    loop: true,
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    className: 'mySwiper',
  };

  return (
    <div data-aos="fade" className='mx-auto flex align-middle content-center'>
      <Swiper {...swiperSettings}>
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
  );
}
