import React from "react";
import IconBackground from "./UI/iconBackground/iconBackground";
import Swiper from "./UI/Swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const designsContent = (props) => (
  <React.Fragment>
    <IconBackground />
    <Swiper>
      <SwiperSlide>
        <div className="h-full p-3 grid grid-flow-col gap-6 place-items-center">
          <img
            className="w-full rounded-md"
            src="https://s3-us-west-1.amazonaws.com/astrosites.io/outerspace1.jpg"
          />
          <img
            className="w-full rounded-md"
            src="https://s3-us-west-1.amazonaws.com/astrosites.io/outerspace2.jpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </React.Fragment>
);

export default designsContent;
