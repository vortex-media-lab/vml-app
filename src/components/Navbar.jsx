import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, scroller } from 'react-scroll';
import 'font-awesome/css/font-awesome.min.css';

const navigation = [
  { name: 'Nuestro trabajo', href: 'carrousel', current: false },
  { name: 'Nosotros', href: 'aboutUs', current: false },
  { name: 'Servicios', href: 'services', current: false },
  { name: 'Contacto', href: 'socios', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const activeLink = scroller.getActiveLink();

      if (activeLink) {
        setActiveSection(activeLink);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavbarColor = () => {
    switch (activeSection) {
      case 'carrousel':
        return 'bg-[#031f35]';
      case 'aboutUs':
        return 'bg-[#e2eadb]';
      case 'weAre':
        return 'bg-[#031f35]';
      case 'socios':
        return 'bg-[#9f9fed]';
      default:
        return 'bg-[#031f35cb]';
    }
  };
// Agrega la ruta correcta a "logo-dark.png" en las siguientes dos líneas:
const logoDarkSrc = 'logo-dark.png';
const logoAltText = 'Your Company';

  return (
    <Disclosure as='nav' className={`${getNavbarColor()} `}>
      {({ open, close }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div className='relative flex h-16 items-center justify-between w-full'>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className='block h-6 w-6 bg-black text-light-50 bg-light-100'
                      aria-hidden='true'
                    />
                  ) : (
                    <Bars3Icon
                      className='block h-6 w-6 bg-black ext-light-50 opacity-30 '
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-between sm:items-stretch sm:justify-between align-middle'>
              <div className='flex flex-shrink-0 items-center'>
                  {/* Cambia la imagen a "logo-dark.png" solo en los casos 'aboutUs' y 'socios' */}
                  {['aboutUs', 'socios'].includes(activeSection) ? (
                    <img
                      className='block h-8 w-auto lg:hidden'
                      src={logoDarkSrc}
                      alt={logoAltText}
                    />
                  ) : (
                    <img
                      className='block h-8 w-auto lg:hidden'
                      src='vortex.png'
                      alt='Vortex Media Lab'
                    />
                  )}
                  {['aboutUs', 'socios'].includes(activeSection) ? (
                    <img
                      className='hidden h-8 w-auto lg:block'
                      src={logoDarkSrc}
                      alt={logoAltText}
                    />
                  ) : (
                    <img
                      className='hidden h-8 w-auto lg:block'
                      src='vortex.png'
                      alt='Your Company'
                    />
                  )}
                </div>
             <div className="flex">   <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-[#9f9fed] hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium',
                          // Agrega la clase 'text-black' para el texto del menú cuando el fondo es oscuro
                          activeSection === 'aboutUs' || activeSection === 'socios' ? 'text-black' : ''
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={close}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4 items-center justify-center h-full'>
    <a
        href='https://www.facebook.com/'
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-center bg-green-primary rounded-full w-6 h-6 bg-[#7fed3e] hover:bg-green-600'>
        <i className='fa fa-facebook fa-lg text-white'></i>
    </a>
    <a
        href='https://twitter.com/'
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-center bg-green-primary rounded-full w-6 h-6 bg-[#7fed3e] hover:bg-green-600'>
        <i className='fa fa-twitter fa-lg text-white'></i>
    </a>
    <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-center bg-green-primary rounded-full w-6 h-6 bg-[#7fed3e] hover:bg-green-600'>
        <i className='fa fa-instagram fa-lg text-white'></i>
    </a>
</div>

</div></div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={close}>
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
