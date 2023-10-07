// import React from 'react'
import React, { useState, useEffect } from "react";
import "./Testimonials.css";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const url = "https://myportfolio-r9dm.onrender.com/myPortfolio/";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch(url);
    const d = await res.json();
    return setData(d);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data
          .filter((dataObj) => {
            return dataObj.testimonial;
          })
          .map((dataObj) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img
                    src={dataObj.testimonial.testimonial_image}
                    alt="Friend1"
                  />
                </div>
                <h5 className="client__name">
                  {dataObj.testimonial.provider_name}
                </h5>
                <small className="client__review">
                  {dataObj.testimonial.review}
                </small>
              </SwiperSlide>
            );
          })}
        {/* <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Friend1" />

                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa velit a minima beatae dolorum! Nobis distinctio perspiciatis, deserunt architecto doloribus impedit labore. Eius minus magnam veniam repellendus enim qui!
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Friend2" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa velit a minima beatae dolorum! Nobis distinctio perspiciatis, deserunt architecto doloribus impedit labore. Eius minus magnam veniam repellendus enim qui!
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Friend3" />

                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa velit a minima beatae dolorum! Nobis distinctio perspiciatis, deserunt architecto doloribus impedit labore. Eius minus magnam veniam repellendus enim qui!
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Friend4" />

                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa velit a minima beatae dolorum! Nobis distinctio perspiciatis, deserunt architecto doloribus impedit labore. Eius minus magnam veniam repellendus enim qui!
                    </small>
                </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Testimonials;
