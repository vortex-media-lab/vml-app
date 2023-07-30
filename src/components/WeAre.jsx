import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WeAre() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section data-aos="fade-up" className='WeAre flex flex-col h-screen w-full pt-18 items-center justify-center'>
      <p className='text-5xl text-white'>
        No sólo somos creadores,
      </p>
      <p className='text-5xl py-3 enfasis2'>
        somos especialistas
      </p>
      <p className='text-6xl p-12'>
        brand <i className="enfasis2 p-2">new</i> vision
      </p>

      <div className="flex justify-center mt-4">
        {/* Columnas con animación fade-up */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-center p-8">
          <div className="w-60 h-60 rounded-full bg-[#7fed3e] flex items-center justify-center">
            <p className="flex flex-col text-2xl text-[#031f35cb] p-4">Atención
              <i className='enfasis'>personalizada</i> para tu marca</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="flex items-center justify-center p-8">
          <div className="w-60 h-60 rounded-full bg-[#7fed3e] flex items-center justify-center ">
            <p className="flex flex-col text-2xl  text-[#031f35cb] p-4">
              <i className='enfasis'>Innovación y<br /></i> actualización</p> </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="flex items-center justify-center p-8">
          <div className="w-60 h-60 rounded-full bg-[#7fed3e] flex items-center justify-center">
            <p className="flex flex-col text-2xl  text-[#031f35cb] p-4">Especialidad <br />
              <i className='enfasis'>en medios audiovisuales</i> </p> </div>
        </div>
      </div>
    </section>
  );
}

export default WeAre;
