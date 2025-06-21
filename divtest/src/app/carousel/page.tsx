'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">hello</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] bg-white rounded-2xl shadow-lg"
      >
        {["image1.jpg", "image2.gif", "image3.jpg", "image4.jpg", "image5.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/images/${img}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
