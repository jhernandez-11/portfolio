import React from "react";
import Swiper from "../UI/Swiper";
import { SwiperSlide } from "swiper/react";
import DesignsSlide from './DesignsSlide'

const designsContent = (props) => (
  <React.Fragment>
    <Swiper>
      <SwiperSlide>
        <DesignsSlide link="https://s3-us-west-1.amazonaws.com/astrosites.io/outerspace.png" />
      </SwiperSlide>
      <SwiperSlide>
        <DesignsSlide link="https://s3-us-west-1.amazonaws.com/astrosites.io/skyward-tours.png" />
      </SwiperSlide>
      <SwiperSlide>
        <DesignsSlide link="https://s3-us-west-1.amazonaws.com/astrosites.io/agents.png" />
      </SwiperSlide>
    </Swiper>
  </React.Fragment>
);

export default designsContent;