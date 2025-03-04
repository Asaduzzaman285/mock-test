import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Service = () => {
  const services = [
    {
      img: "assets/images/service-icon-01.png",
      title: "Best Education",
      description:
        "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.",
    },
    {
      img: "assets/images/service-icon-02.png",
      title: "Best Teachers",
      description:
        "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.",
    },
    {
      img: "assets/images/service-icon-03.png",
      title: "Best Students",
      description:
        "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.",
    },
    {
      img: "assets/images/service-icon-02.png",
      title: "Online Meeting",
      description:
        "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.",
    },
    {
      img: "assets/images/service-icon-03.png",
      title: "Best Networking",
      description:
        "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="icon">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="down-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
