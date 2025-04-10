import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
  const testimonials = [
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      img: "assets/img/testimonials/testimonials-1.jpg",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      img: "assets/img/testimonials/testimonials-2.jpg",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum...",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      img: "assets/img/testimonials/testimonials-3.jpg",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam...",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      img: "assets/img/testimonials/testimonials-4.jpg",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat...",
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      img: "assets/img/testimonials/testimonials-5.jpg",
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster...",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
        //   autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="stars">
                  {Array(5).fill().map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <div className="profile mt-auto">
                  <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
