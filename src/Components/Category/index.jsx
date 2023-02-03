import React from 'react';
import '../../Assets/css/style.css';

import catSatu from '../../Assets/images/categories/hiclipart.png';
import catDua from '../../Assets/images/categories/hiclipart-1.png';
import catTiga from '../../Assets/images/categories/hiclipart 40.png';
import catEmpat from '../../Assets/images/categories/hiclipart 12.png';
import catLima from '../../Assets/images/categories/hiclipart 10.png';
import catEnam from '../../Assets/images/categories/Group 1245.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

const Category = () => {
  return (
    <section id="categories">
      <div className="container">
        <div className="row wrapper-title mt-4">
          <div className="col-lg-12 p-1">
            <h3 className="title-categories fw-bold mb-1">Category</h3>
            <p className="sub-title mb-0">What are you currently looking for</p>
          </div>
        </div>

        <div className="container">
          <div className="row mt-3 p-0">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
              <div className="swiper slideCategories">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={6}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                      enabled: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                      },

                      396: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                      },
                      581: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },

                      768: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                      },

                      881: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                      },

                      950: {
                        slidesPerView: 4,
                        spaceBetween: 150,
                      },

                      991: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },

                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },

                      1400: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                      },
                    }}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <a href="" className="card-category">
                        <div className="image-content">
                          <img src={catSatu} alt="" className="image-categories" />
                        </div>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide>
                      <a href="" className="card-category">
                        <div className="image-content">
                          <img src={catDua} alt="" className="image-categories" />
                        </div>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide>
                      <a href="" className="card-category">
                        <div className="image-content">
                          <img src={catTiga} alt="" className="image-categories" />
                        </div>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide>
                      <a href="" className="card-category">
                        <div className="image-content">
                          <img src={catEmpat} alt="" className="image-categories" />
                        </div>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide>
                      <a href="" className="card-category">
                        <div className="image-content">
                          <img src={catLima} alt="" className="image-categories" />
                        </div>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide>
                      <a href="" className="card-category">
                        <div className="image-content">
                          <img src={catEnam} alt="" className="image-categories" />
                        </div>
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
