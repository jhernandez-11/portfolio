import React from "react";
import Swiper from "../UI/Swiper";
import { SwiperSlide } from "swiper/react";
import DevelopmentsSlide from "./DevelopmentsSlide";

const developmentsContent = (props) => (
  <React.Fragment>
    <Swiper>
      <SwiperSlide>
        <DevelopmentsSlide
          title="The Cast"
          link="https://the-cast-next.vercel.app/"
        />
      </SwiperSlide>
    </Swiper>
  </React.Fragment>
);

export default developmentsContent;