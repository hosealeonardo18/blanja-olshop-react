import React from 'react';
import '../../Assets/css/style.css';
import Logo from '../../Assets/images/icon/logo.png';

const FormLogin = () => {
  return (
    <main id="login">
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
              <p className="fw-bold title-text">Please login with your account</p>
            </div>
          </div>

          <div className="row justify-content-center mt-sm-3 text-center">
            <div className="col-lg-6 col-xl-4 col-md-8 col-sm-10">
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

              {/* Seller */}
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                  <form className="pt-4 pt-sm-3" method="POST">
                    <div className="mb-3">
                      <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                      <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" />
                    </div>

                    <div className="mb-4 d-flex justify-content-end">
                      <a className="btn btn-forgot" href="/pages/auth/ResetPassEmail.html">
                        Forgot Password?
                      </a>
                    </div>

                    <button type="submit" className="btn btn-login-form">
                      Login
                    </button>

                    <div className="d-flex align-items-center mt-4 justify-content-center">
                      <p className="text">
                        Don't have a Blanja account ? <a href="/pages/auth/Register.html">Register</a>
                      </p>
                    </div>
                  </form>
                </div>

                {/*  tab customer  */}
                <div className="tab-pane fade" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
                  <form className="pt-4" method="POST">
                    <div className="mb-3">
                      <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                      <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" />
                    </div>

                    <div className="mb-4 d-flex justify-content-end">
                      <a className="btn btn-forgot" href="/pages/auth/ResetPassEmail.html">
                        Forgot Password?
                      </a>
                    </div>

                    <button type="submit" className="btn btn-login-form">
                      Login
                    </button>

                    <div className="d-flex align-items-center mt-5 justify-content-center">
                      <p className="text">
                        Don't have a Blanja account ? <a href="/pages/auth/Register.html">Register</a>
                      </p>
                    </div>
                  </form>
                  {/* end Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormLogin;
