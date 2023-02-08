import React from 'react';
import Navbar from '../Components/Navbar';
import '../Assets/css/style.css';
import img from '../Assets/images/product/1de17b40-c750-40ed-a618-ca2c5ee79da0 1.png';
import NavbarLogin from '../Components/NavbarLogin';
const Cart = () => {
  const isLogin = localStorage.getItem('token');
  if (!isLogin) {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <section id="cart">
            <div className="container py-4">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <h2 className="title-categories fw-bold">My bag</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  <div className="card-checkbox d-flex mb-3">
                    <input type="checkbox" className="me-3" />
                    <div className="select-btn d-flex justify-content-between">
                      <p className="btn-text mb-0">Select all items</p>
                      <a className="btn-delete" href="">
                        Delete
                      </a>
                    </div>
                  </div>

                  <div className="card-checkbox d-flex mb-3">
                    <input type="checkbox" className="checkbox me-3" />
                    <div className="select-btn d-flex align-content-center justify-content-between">
                      <div className="wrapper-product d-flex align-content-center">
                        <div className="wrapper-img-checkbox me-3">
                          <img className="img-cart" src={img} alt="" />
                        </div>

                        <div className="wrapper-desc pt-3">
                          <h5 className="title-product mb-2">Men's formal suit - Black & White</h5>
                          <p className="text-seller">Zalora Cloth</p>
                        </div>
                      </div>

                      <div className="product-qty pt-3">
                        <button className="btn-mines" href="">
                          <i className="bi bi-dash-lg"></i>
                        </button>
                        <span className="qty ms-2 me-2">1</span>
                        <button className="btn-plus" href="">
                          <i className="bi bi-plus-lg"></i>
                        </button>
                      </div>

                      <p className="price mb-0 pt-3 fw-bold">$ 20.0</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-lg-0">
                  <div className="card-form-summary">
                    <div className="row">
                      <div className="col-12">
                        <h5 className="title-sumarry fw-bold">Shopping sumarry</h5>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-6">
                        <p className="text-total">Total Price</p>
                      </div>

                      <div className="col-6 text-end">
                        <span className="price fw-bold">$ 40.0</span>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-12">
                        <button type="submit" className="btn btn-login-form" onclick="window.location.href='/pages/checkout.html'">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavbarLogin />
      </header>
      <main>
        <section id="cart">
          <div className="container py-4">
            <div className="row mb-4">
              <div className="col-lg-12">
                <h2 className="title-categories fw-bold">My bag</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-sm-12">
                <div className="card-checkbox d-flex mb-3">
                  <input type="checkbox" className="me-3" />
                  <div className="select-btn d-flex justify-content-between">
                    <p className="btn-text mb-0">Select all items</p>
                    <a className="btn-delete" href="">
                      Delete
                    </a>
                  </div>
                </div>

                <div className="card-checkbox d-flex mb-3">
                  <input type="checkbox" className="checkbox me-3" />
                  <div className="select-btn d-flex align-content-center justify-content-between">
                    <div className="wrapper-product d-flex align-content-center">
                      <div className="wrapper-img-checkbox me-3">
                        <img className="img-cart" src={img} alt="" />
                      </div>

                      <div className="wrapper-desc pt-3">
                        <h5 className="title-product mb-2">Men's formal suit - Black & White</h5>
                        <p className="text-seller">Zalora Cloth</p>
                      </div>
                    </div>

                    <div className="product-qty pt-3">
                      <button className="btn-mines" href="">
                        <i className="bi bi-dash-lg"></i>
                      </button>
                      <span className="qty ms-2 me-2">1</span>
                      <button className="btn-plus" href="">
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>

                    <p className="price mb-0 pt-3 fw-bold">$ 20.0</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-lg-0">
                <div className="card-form-summary">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="title-sumarry fw-bold">Shopping sumarry</h5>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-6">
                      <p className="text-total">Total Price</p>
                    </div>

                    <div className="col-6 text-end">
                      <span className="price fw-bold">$ 40.0</span>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-12">
                      <button type="submit" className="btn btn-login-form" onclick="window.location.href='/pages/checkout.html'">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
