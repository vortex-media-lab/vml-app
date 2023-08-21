import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Grid, Navigation, Pagination } from 'swiper';
import partners from '../utils/partners';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

SwiperCore.use([Autoplay, Grid, Navigation, Pagination]);

export default function Partners() {
  return (
    <section className='partners bg-gradient-to-b from-white to-[#9f9fed] mt-15vh h-auto max-h-70vh flex flex-col items-center justify-center box-border p-2'>
      <p className='text-6xl pt-4  text-[#106166]'>Hemos trabajado con</p>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        navigation={true}
        className='w-full max-w-1300px mx-auto'>
        {partners.map((partner) => (
          <SwiperSlide
            key={partner.id}
            className='text-center text-base bg-white h-[calc((100%-30px)/2)] flex justify-center items-center'>
            <img
              src={partner.img}
              className='max-w-180px max-h-80px md:max-w-100px md:max-h-50px transform transition-transform hover:scale-120 mx-auto'
              alt={partner.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
