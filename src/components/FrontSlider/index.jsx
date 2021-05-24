import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import './index.scss';

const FrontSlider = (props) => {

  SwiperCore.use([Autoplay]);

  return (
    <div className="FrontSlider">
      <Swiper 
        autoplay={{delay: 3000}}
        speed={1000}
      >
        <SwiperSlide>
          <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/1b1aa7d8-041e-4478-9da1-29d8b3adecaa___3fbb91a74e9c8722f455fbc1941c4337.png' alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/c8fe906c-8e17-4573-848b-f4f4a79cda6c___950ad1a45e5b15ccc91e2088d0f3352e.jpg' alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/d13c5e46-fbfc-45db-94bc-509d5fae22bb___2872ad047b46fd6616e58a0bf5d14b6b.gif' alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/2ceca929-b5f8-4364-9873-39ddc7f39639___26a5a18452d41001d7f2752026fb298a.png' alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/aed60f5e-5e9b-4cec-9d9b-54e30a0aa72b___793b75334d24cdcd1b2e72a45a10c081.png' alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FrontSlider;