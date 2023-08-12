import React, { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/App.scss';
import carouselData from '../utils/carouselData.json';

export default function Carrousel() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(2));
    const videoParam = params.get('video');
    if (videoParam) {
      setSelectedVideoUrl(videoParam);
      setModalVisible(true);
    }
  }, []);

  const toggleModal = useCallback((videoUrl) => {
    setModalVisible(!modalVisible);
    setSelectedVideoUrl(videoUrl);
  }, [modalVisible]);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const swiperSettings = {
    spaceBetween: 30,
    autoplay: {
      delay: 8500,
      disableOnInteraction: true,
    },
    effect: 'fade',
    loop: true,
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    className: 'VortexCarrousel',
  };

  return (
    <section data-aos='fade' className='mx-auto flex align-middle content-center relative'>
      <Swiper {...swiperSettings}>
        {carouselData.map(({ id, videoUrl, image, title, description }) => (
          <SwiperSlide key={id}>
            <a onClick={() => toggleModal(videoUrl)}>
              <img src={image} alt='Vortex Media Lab' />
              <p className='titulo'>{title}</p>
              <p>{description}</p>
              <div className='overlay'>
                <div className='text'>Ver el reel</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      {modalVisible && (
        <div style={{ zIndex: 300000000 }} onClick={closeModal}>
          <div className='relative w-screen box-content' onClick={(e) => e.stopPropagation()}>
            <button className='fixed right-4 bottom-16 text-[#031f35] bg-[#7fed3e]' style={{ zIndex: 300000001 }} onClick={closeModal}>
              Cerrar
            </button>
            <iframe
              src={`${selectedVideoUrl}?h=f76d0adfab&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              className='fixed top-0 left-0 w-screen h-screen py-20 '
              title='Embedded Video'
              style={{ backgroundColor: "#Fff" }}
              onEnded={closeModal}
            />
          </div>
        </div>
      )}
    </section>
  );
}
