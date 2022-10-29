import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/App.scss';

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
          className='mySwiper'>
          <SwiperSlide>
            <div  >
              <img src='/assets/Bicicleta.png' alt='Vite logo' />
              <p className='titulo'>BY-cycle® 2022 campaign</p>
              <p>Producción, shooting y dirección creativa - Julio 2022</p>
              <div className='overlay'>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/pSU13TI6XGs" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.youtube.com/watch?v=__k27tMyZZg'>
              <img src='/assets/carrousel.png' alt='Vite logo' />
              <p className='titulo'>BY-cycle® 2022 campaign 2</p>
              <p>Producción, shooting y dirección creativa - Julio 2022</p>
              <div className='overlay'>
                <div className='text'>Ver el reel</div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.youtube.com/watch?v=__k27tMyZZg'>
              <img src='/assets/Bicicleta.png' alt='Vite logo' />
              <p className='titulo'>BY-cycle® 2022 campaign 3</p>
              <p>Producción, shooting y dirección creativa - Julio 2022</p>
              <div className='overlay'>
                <div className='text '>Ver el reel</div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
