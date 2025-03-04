import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Courses = () => {
  const courses = [
    {
      img: 'assets/images/course-01.jpg',
      alt: 'Course One',
      title: 'Morbi tincidunt elit vitae justo rhoncus',
      rating: 5,
      price: '$160',
    },
    {
      img: 'assets/images/course-02.jpg',
      alt: 'Course Two',
      title: 'Curabitur molestie dignissim purus vel',
      rating: 3,
      price: '$180',
    },
    {
      img: 'assets/images/course-03.jpg',
      alt: '',
      title: 'Nulla at ipsum a mauris egestas tempor',
      rating: 4,
      price: '$140',
    },
    {
      img: 'assets/images/course-04.jpg',
      alt: '',
      title: 'Aenean molestie quis libero gravida',
      rating: 5,
      price: '$120',
    },
    {
        img: 'assets/images/course-01.jpg',
        alt: '',
        title: 'Lorem ipsum dolor sit amet adipiscing elit',
        rating: 5,
        price: '$250',
      },
      {
        img: 'assets/images/course-02.jpg',
        alt: '',
        title: 'TemplateMo is the best website for Free CSS',
        rating: 5,
        price: '$270',
      },
      {
        img: 'assets/images/course-03.jpg',
        alt: '',
        title: 'Web Design Templates at your finger tips',
        rating: 5,
        price: '$340',
      }
    // ... (other courses)
  ];

  const renderStars = (count) => {
    return (
      <ul>
        {[...Array(count)].map((_, i) => (
          <li key={i}>
            <i className="fa fa-star"></i>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Popular Courses</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {courses.map((course, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <img src={course.img} alt={course.alt || course.title} />
                    <div className="down-content">
                      <h4>{course.title}</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">{renderStars(course.rating)}</div>
                          <div className="col-4">
                            <span>{course.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;