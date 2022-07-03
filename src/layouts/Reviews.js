import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import Comment from "./Comment";

// https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-parallax-2.jpg
const StyleReviews = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-parallax-2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0;
`;
const Reviews = () => {
  return (
    <StyleReviews>
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <Comment></Comment>
        </SwiperSlide>
      </Swiper>
    </StyleReviews>
  );
};

export default Reviews;
