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
    <section data-aos="fade-up" className='WeAre flex flex-col w-full pt-18 items-center justify-center px-4 md:px-0'>
      <p className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>
        No sólo somos creadores,
      </p>
      <p className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl py-3 enfasis2'>
        somos especialistas
      </p>
      <br/>
      <p className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl '>
        brand <i className="enfasis2 p-2">new</i> vision
      </p>

      <div className="flex flex-wrap justify-center mt-4">
        {/* Columnas con animación fade-up */}
        {[200, 400, 600].map((delay, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={delay} className="flex items-center justify-center p-4">
            <div className="w-32 h-32 md:w-60 md:h-60 sm:w-60 sm:h-60 rounded-full bg-[#7fed3e] flex items-center justify-center">
              <p className="flex flex-col text-xs md:text-2xl sm:text-6xl text-[#031f35cb] p-7">
                {index === 0 && <>Atención <i className='enfasis'>personalizada</i> para tu marca</>}
                {index === 1 && <><i className='enfasis'>Innovación y<br /></i> actualización</>}
                {index === 2 && <>Especialidad <br /><i className='enfasis'>en medios audiovisuales</i></>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeAre;
