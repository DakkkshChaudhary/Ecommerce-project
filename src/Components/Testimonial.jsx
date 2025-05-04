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
      text: "This platform has transformed the way I shop online. The quality of service and fast delivery is unmatched!",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      img: "assets/img/testimonials/testimonials-2.jpg",
      text:  "A fantastic shopping experience! I found exactly what I needed, and the support team was super helpful.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      img: "assets/img/testimonials/testimonials-3.jpg",
      text: "The product variety is excellent, and the checkout process is smooth and hassle-free. Highly recommended!",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      img: "assets/img/testimonials/testimonials-4.jpg",
      text: "I love how easy it is to browse and buy from this site. Everything was delivered on time and in great condition.",
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      img: "assets/img/testimonials/testimonials-5.jpg",
      text: "Impressive selection and great customer service. This is now my go-to store for everything I need online!",
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
