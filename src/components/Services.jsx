import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from '/src/fondo.png';

const isMobile = window.innerWidth <= 768;
const getRandomSize = () => {
  return isMobile
    ? Math.random() * (1.2625 - 1.375) + 1.375
    : Math.random() * 1 + 2.3;
};

const services = [
  'digital',
  'creatividad',
  'comercial',
  'slide kit',
  'concierto',
  'arte',
  'visual',
  'experiencia',
  'contenido',
  'filmación',
  'corporativo',
  'fotografía',
  'producción',
  'animación',
  'marketing',
  'promocional',
  'programación',
  'podcast',
  'VFX',
  'branding',
  '3D',
  'multimedia',
  'streaming',
  'web',
  'social media',
  'videoclip',
  'voiceover',
];
const colors = ['#e2eadb', '#7fed3e'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className='services'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className='flex flex-col w-full items-center justify-center  md:px-0'>
        <h3 className='text-6xl responsive-text mb-8'>Servicios</h3>

        <div className='flex flex-wrap justify-center items-center space-y-4 md:space-y-0'>
          {services.map((service, index) => {
            const randomColor = getRandomColor();
            const randomSize = getRandomSize();
            return (
              <div
                key={index}
                className={`py-0 sm:py-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 mx-2 my-2 responsive-text`}
                data-aos='zoom-in'
                style={{
                  fontSize: `${randomSize}rem`,
                  color: randomColor,
                }}>
                {service.split(' ').map((word, wordIndex) => {
                  const isItalic = Math.random() > 0.5 ? 'italic' : '';
                  return (
                    <b
                      key={wordIndex}
                      className={`${
                        wordIndex % 2 === 0 ? 'app-2' : 'app-3'
                      } ${isItalic}`}>
                      {word}{' '}
                    </b>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
