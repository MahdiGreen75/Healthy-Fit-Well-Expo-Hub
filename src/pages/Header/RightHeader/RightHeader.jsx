// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const RightHeader = () => {
    return (
        <div className='p-20 drop-shadow-2xl'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide className="p-5 text-center"><p>Join Us for a Day of Wellness and Well-being</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Us for a Yoga Experience Like No Other</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Our Fitness Retreat for a Transformational Journey</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Our Wellness Expo for a Day of Inspiration and Empowerment</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Our Comprehensive Medical Checkup Event</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Our Mental Health Awareness Event</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Our Nutrition Workshops for a Healthier You</p></SwiperSlide>
                <SwiperSlide className="p-5 text-center"><p>Join Our Healthy Cooking event for better life</p></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default RightHeader;