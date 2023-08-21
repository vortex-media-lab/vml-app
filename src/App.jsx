import React, { useEffect } from 'react';
import './styles/App.scss';
import Carrousel from './components/Carrousel';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import WeAre from './components/WeAre';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element, Events, scrollSpy } from 'react-scroll';
import Services from './components/Services';
import WeWould from './components/WeWould';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: function() {
        const maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });

    scrollSpy.update();

    // Removemos eventos registrados al desmontar el componente
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="App scroll-container">
      <Navbar />

      <Element name="carrousel" className="snap-section">
        <Carrousel data-aos="fade-up" />
      </Element>

      <Element name="aboutUs" className="snap-section">
        <AboutUs data-aos="fade-up" data-aos-delay="200" />
      </Element>

      <Element name="weAre" className="snap-section">
        <WeAre data-aos="fade-up" data-aos-delay="400" />
      </Element>
      <Element name="services" className="snap-section">
        <Services data-aos="fade-up" data-aos-delay="600" />
      </Element>
      <Element name="Partners" className="snap-section">
        <Partners data-aos="fade-up" data-aos-delay="600" />
      </Element>
      <Element name="weWould" className="snap-section">
        <WeWould data-aos="fade-up" data-aos-delay="600" />
      </Element>
      <Element name="weWould" className="snap-section">
        <Footer data-aos="fade-up" data-aos-delay="600" />
      </Element>
  
      
    </div>
  );
}

export default App;
