import React from 'react';

function AboutUs() {
  return (
    <section className='AboutUs flex h-screen w-full'>
      <h1 className='text-9xl py-3 '>
        we<span className='apos'> ́</span> are a media lab.
      </h1>
      <p>
        Somos un laboratorio de ideas, <strong>experimentando</strong> en 
        la creaciòn de <strong>contenido hecho a la medida</strong> de 
        tus proyectos.
      </p>
      <p className='tipografy'>
        <strong className='bold'>Cada necesida es ùnica,</strong> por eso trabajamos estrechamente con cada uno de nuestros socios comerciales para <strong>entender du visiòn y alcanzar objetivos</strong> de manera efectiva.
      </p>
      <div className="footer-about">
    
        <img src="/assets/icono-logo.png" alt="Vortex Media Lab" />
      </div>
    </section>
  );
}

export default AboutUs;
