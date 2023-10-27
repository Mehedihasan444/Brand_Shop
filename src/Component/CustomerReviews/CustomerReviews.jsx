import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Reviews from './Reviews';




const CustomerReviews = () => {
  return (

    <div className="my-10">
        <h1 className="text-center text-4xl font-bold">Our Customer Says</h1>
         <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
        <SwiperSlide><Reviews></Reviews></SwiperSlide>
      </Swiper>
    </div>
    
    
  );
};

export default CustomerReviews;
