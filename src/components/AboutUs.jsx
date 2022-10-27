import React from 'react'

function AboutUs() {
  return (
    <>
    
      <section  className='AboutUs flex  h-screen'>
        <h1 className='text-9xl 	'>
        we<span className='apos '>  ́</span> are a media lab.
        </h1>
        <p>
Somos un laboratorio de ideas, desarrollamos contenido visual, narramos historias, plasmamos experiencias, imaginamos cosas nuevas y creamos comunicación a tu medida.
Producimos campañas únicas e innovadoras con el más alto nivel de detalle, creatividad y calidad.

        </p>
        <div className="footer-about">
          <button className='btn'> Ver nuestro trabajo</button>
          <img src="/assets/icono-logo.png" alt="Vortex Media Lab" />
        </div>
      </section>
    
    </>
  )
}

export default AboutUs