import React, { useEffect, useState } from 'react';
import '../Assets/css/style.css';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import color1 from '../Assets/images/colors/Ellipse.png';
import color2 from '../Assets/images/colors/Ellipse-1.png';
import color3 from '../Assets/images/colors/Ellipse-2.png';
import color4 from '../Assets/images/colors/Ellipse-3.png';

const Detail = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/product/${id}`)
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main id="detailProduct">
        <section className="detailProduct">
          <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={`/home`}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  category
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  T-shirt
                </li>
              </ol>
            </nav>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xl-4 col-md-5 col-sm-12">
                <div className="card w-100">
                  <img crossOrigin="anonymous" src={products[0].photo} className="card-img-top" alt="..." />

                  <div className="card-body thumb ps-0 pe-0 w-100 mb-0">
                    <ul className="list-thumb d-flex justify-content-between mb-0">
                      <li className="list-item-thumb">
                        <div className="card-thumb active">
                          <a href="">
                            <img className="img-thumb " crossOrigin="anonymous" src={products[0].photo} alt="" />
                          </a>
                        </div>
                      </li>

                      <li className="list-item-thumb">
                        <div className="card-thumb">
                          <a href="">
                            <img className="img-thumb" crossOrigin="anonymous" src={products[0].photo} alt="" />
                          </a>
                        </div>
                      </li>

                      <li className="list-item-thumb">
                        <div className="card-thumb">
                          <a href="">
                            <img className="img-thumb" crossOrigin="anonymous" src={products[0].photo} alt="" />
                          </a>
                        </div>
                      </li>

                      <li className="list-item-thumb">
                        <div className="card-thumb">
                          <a href="">
                            <img className="img-thumb" crossOrigin="anonymous" src={products[0].photo} alt="" />
                          </a>
                        </div>
                      </li>

                      <li className="list-item-thumb">
                        <div className="card-thumb">
                          <a href="">
                            <img className="img-thumb" crossOrigin="anonymous" src={products[0].photo} alt="" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 mt-sm-0">
                <div className="wrapper-column">
                  <h1 className="title-detail">{products[0].name}</h1>
                  <span className="title-store">{products[0].seller_name}</span>

                  <div className="review d-flex align-items-center">
                    <ul className="stars d-flex align-items-center">
                      <li className="list-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                    </ul>
                    <p className="review-title">(10)</p>
                  </div>

                  <div className="price mt-lg-2">
                    <span className="title-color">Price</span>
                    <p className="price-detail">Rp. {products[0].price}</p>
                  </div>

                  <div className="color">
                    <span className="title-color">Color</span>
                    <div className="color-pallets mt-2">
                      <ul className="list-colors d-flex align-items-center">
                        <li className="list-color">
                          <a className="color active" href="">
                            <img src={color1} alt="" />
                          </a>
                        </li>

                        <li className="list-color">
                          <a className="color active" href="">
                            <img src={color2} alt="" />
                          </a>
                        </li>

                        <li className="list-color">
                          <a className="color active" href="">
                            <img src={color3} alt="" />
                          </a>
                        </li>

                        <li className="list-color">
                          <a className="color active" href="">
                            <img src={color4} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="wrapper-detail d-flex align-items-center mt-4">
                    <div className="wrapper-size">
                      <span className="title-detail-size">Size</span>
                      <div className="counter-size mt-2">
                        <button className="btn-mines" href="">
                          <i className="bi bi-dash-lg"></i>
                        </button>
                        <span className="qty-size ms-2 me-2">{products[0].size}</span>
                        <button className="btn-plus" href="">
                          <i className="bi bi-plus-lg"></i>
                        </button>
                      </div>
                    </div>

                    <div className="wrapper-total">
                      <span className="title-detail-size">Jumlah</span>
                      <div className="counter-total mt-2">
                        <button className="decrement" href="">
                          <i className="bi bi-dash-lg"></i>
                        </button>
                        <span className="qty ms-2 me-2">1</span>
                        <button className="increment" href="">
                          <i className="bi bi-plus-lg"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row button-cta mt-lg-5">
                    <div className="col-4 p-1">
                      <button type="submit" className="btn btn-chat me-3" href="">
                        Chat
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button type="submit" className="btn btn-add me-3" onclick="window.location.href='/pages/cart.html'">
                        Add Bag
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button type="submit" className="btn btn-buy" onclick="window.location.href='/pages/checkout.html'">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="informasiProduct">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="title-informasi mt-0">Informasi Produk</h3>
              </div>
            </div>

            <h5 className="title-kondisi mt-3 mb-0">Condition</h5>
            <span className="status">New</span>

            <div className="row">
              <div className="description mt-4">
                <h5 className="title-description">Description</h5>

                <p className="desc-paragraph mb-0">{products[0].description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="productReview">
          <div className="container">
            <div className="row">
              <h3 className="title-informasi mt-1">Product review</h3>

              <div className="totalReview d-flex align-items-start mt-2">
                <div className="rate">
                  <div className="rate-count d-flex align-items-center">
                    <h1 className="product-rate me-1">{products[0].rating}</h1>
                    <span className="per">/5</span>
                  </div>
                  <div class="rate-star">
                    <ul class="list-retes d-flex align-items-center">
                      <li class="list-rate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li class="list-rate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li class="list-rate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li class="list-rate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li class="list-rate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="rate-rating ms-5">
                  <ul class="rate-ratings mb-0">
                    <li class="rate-list d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <p class="fix-rate ms-2 p-0">5</p>

                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="rate" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                      <p class="fix-rate">4</p>
                    </li>
                    <li class="rate-list d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <p class="fix-rate ms-2 p-0">4</p>

                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="rate" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                      <p class="fix-rate">0</p>
                    </li>
                    <li class="rate-list d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <p class="fix-rate ms-2 p-0">3</p>

                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="rate" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                      <p class="fix-rate">0</p>
                    </li>
                    <li class="rate-list d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <p class="fix-rate ms-2 p-0">2</p>

                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="rate" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                      <p class="fix-rate">0</p>
                    </li>
                    <li class="rate-list d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <p class="fix-rate ms-2 p-0">1</p>

                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="rate" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                      <p class="fix-rate">0</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container mt-3">
          <hr />
        </div>

        <section>
          <Products titleInformasi="You can also like this" subInformasi="You've never seen it before!" />
        </section>
      </main>
    </>
  );
};

export default Detail;
