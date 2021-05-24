import React from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

const Brands = (props) => {
  const { brands } = props;

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
        {
          brands.map(brand => (
            <SwiperSlide key={brand._id} >
              <img src={brand.imageURL} alt="brand" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    brands: state.brands
  }
}

export default connect(mapStateToProps, null)(Brands);