import React from 'react';
import '../../Assets/css/style.css';
import Logo from '../../Assets/images/icon/logo.png';

const FormRegister = () => {
  return (
    <main id="register">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row vw-100 justify-content-center">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-xl-4 col-md-8 col-sm-10">
              <div className="align-content-center">
                <a href="/index.html">
                  <img className="img-logo" src={Logo} alt="Logo-Blanja" />
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center mt-3">
            <div className="col-lg-6 col-xl-4 col-md-8 col-sm-10">
              <p className="fw-bold title-text">Please sign up with your account</p>
            </div>
          </div>

          <div className="row justify-content-center mt-sm-3 text-center">
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-10">
              <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link nav-seller active" id="pills-Seller-tab" data-bs-toggle="pill" data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller" aria-selected="true">
                    Seller
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link nav-customer" id="pills-Customer-tab" data-bs-toggle="pill" data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer" aria-selected="false">
                    Customer
                  </button>
                </li>
              </ul>

              {/* <!-- tab seller --> */}
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                  <form className="pt-4 pt-sm-3">
                    <div className="mb-3">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                    </div>

                    <div className="mb-3">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                      <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone Number" />
                    </div>

                    <div className="mb-3">
                      <input type="text" className="form-control" id="store" name="store" placeholder="Store Name" />
                    </div>

                    <div className="mb-4">
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-login-form mt-1">
                      Login
                    </button>

                    <div className="d-flex align-items-center mt-4 justify-content-center">
                      <p className="text">
                        Already have a Blanja Account ? <a href="/pages/auth/Login.html">Login</a>
                      </p>
                    </div>
                  </form>
                </div>

                {/* <!-- tab customer --> */}
                <div className="tab-pane fade" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
                  <form className="pt-4">
                    <div className="mb-3">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                    </div>

                    <div className="mb-3">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-login-form">
                      Login
                    </button>

                    <div className="d-flex align-items-center mt-4 justify-content-center">
                      <p className="text">
                        Already have a Blanja Account ? <a href="/pages/auth/Login.html">Login</a>
                      </p>
                    </div>
                  </form>
                  {/* <!-- end Form --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormRegister;
