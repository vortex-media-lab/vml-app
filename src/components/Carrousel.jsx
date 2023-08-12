import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';

import '../styles/App.scss';
import carouselData from '../utils/carouselData.json';

export default function Carrousel() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(2));
    const videoParam = params.get('video');

    if (videoParam) {
      setSelectedVideoUrl(videoParam);
      setModalVisible(true);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', closeModal);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', closeModal);
      }
    };
  }, []);

  const toggleModal = (videoUrl) => {
    setModalVisible(!modalVisible);
    setSelectedVideoUrl(videoUrl);
  };

  const closeModal = () => {
    setModalVisible(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

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
    <div data-aos="fade" className="mx-auto flex align-middle content-center relative">
      {modalVisible && (
        <iframe
          ref={videoRef}
          src={`${selectedVideoUrl}?h=f76d0adfab&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="fixed top-0 left-0 w-screen h-screen z-0"
          title="Embedded Video"
        ></iframe>
      )}
      <Swiper {...swiperSettings}>
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <a onClick={() => toggleModal(slide.videoUrl)}>
              <img src={slide.image} alt="Vortex Media Lab" />
              <p className="titulo">{slide.title}</p>
              <p>{slide.description}</p>
              <div className="overlay">
                <div className="text">Ver el reel</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      {modalVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#031f35] flex justify-center items-center" style={{ zIndex: 300000000 }} onClick={closeModal}>
          <div className="relative w-screen " onClick={(e) => e.stopPropagation()}>
            <button
              className="fixed right-4 bottom-8 text-[#031f35] bg-[#7fed3e]"
              style={{ zIndex: 300000001 }}
              onClick={() => closeModal()}
            >
              Close
            </button>
            {/* */}
            <div className="fixed top-0 left-0 w-screen h-screen ">
              <iframe
                ref={videoRef}
                src={`${selectedVideoUrl}?h=f76d0adfab&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="fixed top-0 left-0 w-screen h-screen   "
                title="Embedded Video"
                style={{ backgroundColor: '#031f35' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
