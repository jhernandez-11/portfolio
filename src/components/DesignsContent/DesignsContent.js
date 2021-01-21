import React from "react";
import Swiper from "../UI/Swiper";
import { SwiperSlide } from "swiper/react";
import DesignsSlide from './DesignsSlide'

const designsContent = (props) => (
  <React.Fragment>
    <Swiper>
      <SwiperSlide>
        <DesignsSlide link="https://s3-us-west-1.amazonaws.com/astrosites.io/outerspace1.jpg" />
      </SwiperSlide>
    </Swiper>
  </React.Fragment>
);

export default designsContent;