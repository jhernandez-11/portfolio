import React from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const swiperContainer = (props) => {
  return (
    <React.Fragment>
      <Swiper
        className="w-screen h-5/6"
        direction="vertical"
        grabCursor={true}
        mousewheel={{ invert: true, forceToAxis: true }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: false, type: "progressbar" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        { props.children }
      </Swiper>
    </React.Fragment>
  );
};

export default swiperContainer;
