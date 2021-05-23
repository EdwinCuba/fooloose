import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import './index.scss';

const Brands = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="Brands">
      <Swiper
        autoplay={{delay: 0}}
        longSwipesRatio={0}
        speed={1000}
        loop
        slidesPerView={'3'}
        spaceBetween={0}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-footloose.svg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Brands;