import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TeamSlider() {
  const [showPerPage, setShowPerPage] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 576) setShowPerPage(1);
      else if (window.innerWidth < 768) setShowPerPage(1);
      else if (window.innerWidth < 1200) setShowPerPage(3);
      else setShowPerPage(3);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers = [
    {
      img: 'assets/img/team/team-1.jpg',
      name: 'Walter White',
      role: 'Chief Executive Officer',
      desc: 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut.',
    },
    {
      img: 'assets/img/team/team-2.jpg',
      name: 'Sarah Jhonson',
      role: 'Product Manager',
      desc: 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima.',
    },
    {
      img: 'assets/img/team/team-3.jpg',
      name: 'William Anderson',
      role: 'CTO',
      desc: 'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt.',
    },
    {
      img: 'assets/img/team/team-4.jpg',
      name: 'Amanda Jepson',
      role: 'Accountant',
      desc: 'Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas.',
    },
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our hard working team</p>
      </div>

      <div className="container">
        <Swiper
          slidesPerView={showPerPage}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className="team-member">
                  <div className="member-img">
                    <img src={member.img} className="img-fluid" alt={member.name} />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                    <p>{member.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
