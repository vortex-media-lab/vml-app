import React from 'react';
import logoDarkSrc from '../../src/vortex.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer h-full flex justify-between items-center flex-col  ">
      <div className="container flex flex-col md:flex-row py-8">
        <div className="left md:w-1/2 p-4 justify-between h-auto" >
          <img src={logoDarkSrc} alt="Vortex Media lab" className="my-8 max-w-[240px] h-auto" />
          <p className="text-4xl text-left text-white">
            Somos un laboratorio de ideas,{" "}
            <strong className="enfasis">experimentando</strong> en la<br /> creación de{" "}
            <strong className="enfasis">contenido hecho a la medida</strong> de tus proyectos.
          </p>
          <div className='  my-5'>
            <div className='flex space-x-8 items-left justify-start h-full footerLinks'>
              <a
                href='https://www.facebook.com/vortexmedialabmx/'
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-center bg-green-primary rounded-full w-16 h-16 bg-[#7fed3e] hover:bg-green-600'>
                <i className='fa fa-facebook fa-lg text-[#106166]'></i>
              </a>
              <a
                href='https://www.linkedin.com/company/vortex-media-lab/'
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-center bg-green-primary rounded-full w-16 h-16 bg-[#7fed3e] hover:bg-green-600'>
                <i className='fa fa-linkedin fa-lg text-[#106166]'></i>
              </a>
              <a
                href='https://www.instagram.com/vortexmedialab/vortexmedialab/'
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-center bg-green-primary rounded-full w-16 h-16 bg-[#7fed3e] hover:bg-green-600'>
                <i className='fa fa-instagram fa-lg text-[#106166]'></i>
              </a>
            </div>
          </div>
     
        </div>
        <div className="right md:w-1/2 p-4">
          <p className='text-4xl'>brand <b className="enfasis">new</b> vision</p>
          <div>
            <iframe style={{borderRadius: 22}} src="https://open.spotify.com/embed/playlist/6mxvKQjtkpURi3F0kqSIQw?utm_source=generator" width="100%" height={532} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
          </div>
        </div>
      </div>
      <p className="text-white m-5">{currentYear} Copyright© Vortex Media Lab® All rights reserved. </p>
    </section>
  );
}

export default Footer;
