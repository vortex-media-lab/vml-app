import React, { useEffect } from 'react';
import './styles/App.scss';
import Carrousel from './components/Carrousel';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Socios from './components/Socios';
import WeAre from './components/WeAre';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  Element, Events, scrollSpy } from 'react-scroll';

function App() {
  useEffect(() => {
    console.log('------init');
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Para espiar a los elementos y saber cuál es actualmente visible en la ventana
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Element name="carrousel">
        <Carrousel data-aos="fade-up" />
      </Element>

      <Element name="aboutUs">
        <AboutUs data-aos="fade-up" data-aos-delay="200" />
      </Element>

      <Element name="weAre">
        <WeAre data-aos="fade-up" data-aos-delay="400" />
      </Element>

      <Element name="socios">
        <Socios data-aos="fade-up" data-aos-delay="600" />
      </Element>
    </div>
  );
}

export default App;
