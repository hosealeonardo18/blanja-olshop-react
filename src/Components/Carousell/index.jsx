import React from 'react';
import '../../Assets/css/style.css';
import imgCarousel from '../../Assets/images/carousell/carousell 1.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Carousell = () => {
  return (
    <section id="carousel">
      <div class="container overflow-hidden position-relative">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="swiper slide-content">
              <div class="swiper-wrapper text-center">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={450}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    520: {
                      slidesPerView: 1,
                      spaceBetween: 100,
                    },

                    768: {
                      slidesPerView: 2,
                      spaceBetween: 275,
                    },

                    881: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },

                    950: {
                      slidesPerView: 2,
                      spaceBetween: 260,
                    },

                    991: {
                      slidesPerView: 3,
                      spaceBetween: 465,
                    },

                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 360,
                    },

                    1400: {
                      slidesPerView: 3,
                      spaceBetween: 180,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <a href="" class="card-carousel">
                      <div class="card-image">
                        <img src={imgCarousel} />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="" class="card-carousel">
                      <div class="card-image">
                        <img src={imgCarousel} />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="" class="card-carousel">
                      <div class="card-image">
                        <img src={imgCarousel} />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="" class="card-carousel">
                      <div class="card-image">
                        <img src={imgCarousel} />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="" class="card-carousel">
                      <div class="card-image">
                        <img src={imgCarousel} />
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousell;
