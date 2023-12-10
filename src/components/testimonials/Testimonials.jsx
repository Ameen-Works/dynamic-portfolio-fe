// import React from 'react'
import React from "react";
import "./Testimonials.css";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Loading from "./Loading";

const Testimonials = ({ data, loading }) => {
  // const url = "https://myportfolio-r9dm.onrender.com/myPortfolio/";
  // const [data, setData] = useState([]);
  // const [loading,setLoading]=useState(true);

  // const fetchInfo = async () => {
  //   const res = await fetch(url);
  //   const d = await res.json();
  //   setLoading(false);
  //   return setData(d);
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {loading ? (
        <Loading />
      ) : (
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
                <SwiperSlide
                  className="testimonial"
                  key={dataObj._id}
                >
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
        </Swiper>
      )}
    </section>
  );
};

export default Testimonials;
