import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



export default function CategorySlider() {
  let [showPerPage,setShowPerPage]= useState(6)

  function handleWindowResize(){
    if(window.innerWidth<576)
      showPerPage(2)
    else if(window.innerWidth<992)
      showPerPage(4)
    else if (window.innerWidth<1200)
      showPerPage(5)
    else
    showPerPage(6)
  }
  window.addEventListener("resize", handleWindowResize);
  
  return (
   <>
    <section id="clients" className="clients section">


<div className="container section-title" data-aos="fade-up">
  <h2>Clients</h2>
  <p>We work with best clients<br/></p>
</div>

<div className="container" data-aos="fade-up" data-aos-delay="100">

<Swiper
        slidesPerView={showPerPage}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
    
    
      <SwiperSlide><img src="assets/img/clients/client-1.png" className="img-fluid" style={{height:80}} alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-2.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-3.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-4.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-5.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-6.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-7.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
      <SwiperSlide><img src="assets/img/clients/client-8.png" className="img-fluid" style={{height:80}}  alt=""/></SwiperSlide>
    <div className="swiper-pagination"></div>
  </Swiper>

</div>

</section>
   </>
  )
}



// import React from 'react'

// export default function CategorySlider() {
//   return (
//     <section id="clients" className="clients section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Clients</h2>
//         <p>We work with best clients<br/></p>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">

//         <div className="swiper init-swiper">
          
//           <div className="swiper-wrapper align-items-center">
//             <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""/></div>
//             <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""/></div>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>

//       </div>

//     </section>
//   )
// }
