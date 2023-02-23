import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Slider = ({ SliderImages }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.title}
           
            />
          </SwiperSlide>
        ))}

      
      </Swiper>
    </div>
    
   
  );
};

export default Slider;
