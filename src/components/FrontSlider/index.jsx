import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './index.scss';

const FrontSlider = (props) => {
  return (
    <Swiper 
      spaceBetween={500}
      autoPlay
    >
      <SwiperSlide>
        <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/1b1aa7d8-041e-4478-9da1-29d8b3adecaa___3fbb91a74e9c8722f455fbc1941c4337.png' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/1b1aa7d8-041e-4478-9da1-29d8b3adecaa___3fbb91a74e9c8722f455fbc1941c4337.png' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/1b1aa7d8-041e-4478-9da1-29d8b3adecaa___3fbb91a74e9c8722f455fbc1941c4337.png' alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default FrontSlider;