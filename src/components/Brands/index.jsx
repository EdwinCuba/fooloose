import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './index.scss';

const Brands = () => {
  return (
    <div className="Brands">
      <Carousel
        autoPlay 
        centerMode 
        emulateTouch 
        infiniteLoop
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        transitionTime={1000}
        interval={500}
        centerMode={true}
        centerSlidePercentage={5}
        swipeable={false}
      >
        <div>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-adidas.svg" width={50} alt="" />
        </div>
        
        <div>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-adidas.svg" width={50} alt="" />
        </div>
        
        <div>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-adidas.svg" width={50} alt="" />
        </div>
        
        <div>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-adidas.svg" width={50} alt="" />
        </div>
        
        <div>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-adidas.svg" width={50} alt="" />
        </div>
        
        <div>
          <img src="https://footloose.vtexassets.com/arquivos/ftl-brand-adidas.svg" width={50} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Brands;