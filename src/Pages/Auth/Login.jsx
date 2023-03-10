import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/css/style.css';
import Logo from '../../Assets/images/icon/logo.png';
import axios from 'axios';
import swal from 'sweetalert';

const Login = () => {
  const navigate = useNavigate();

  // login seller
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/seller/auth/login`, { email, password });

      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('role', response.data.data.role);

      if (localStorage.getItem('token')) {
        swal({
          title: `${response.data.message}`,
          text: 'You clicked the button!',
          icon: 'success',
          button: 'OK',
        });
        navigate('/home');
        // window.location.reload();
      }
    } catch (error) {
      swal({
        title: `${error.response.data.message}`,
        text: 'You clicked the button!',
        icon: 'error',
        button: 'OK',
      });
    }
  };

  // login cust
  const [emailCust, setEmailCust] = useState('');
  const [passwordCust, setPasswordCust] = useState('');

  const handleSubmitCust = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/auth/login`, { emailCust, passwordCust });

      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('role', res.data.data.role);

      if (localStorage.getItem('token')) {
        swal({
          title: `${res.data.message}`,
          text: 'You clicked the button!',
          icon: 'success',
          button: 'OK',
        });
        navigate('/home');
      } else {
        swal({
          title: `${res.data.message}`,
          text: 'You clicked the button!',
          icon: 'error',
          button: 'OK',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main id="login">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row vw-100 justify-content-center">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-xl-4 col-md-8 col-sm-10">
              <div className="align-content-center">
                <Link to={`/home`}>
                  <img className="img-logo" src={Logo} alt="Logo-Blanja" />
                </Link>
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
                  <form className="pt-4 pt-sm-3" onSubmit={handleSubmit}>
                    {/* {error && <div className="error">{error}</div>} */}
                    <div className="mb-3">
                      <input className="form-control" id="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                      <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                        Don't have a Blanja account ? <Link to={`/register`}>Register</Link>
                      </p>
                    </div>
                  </form>
                </div>

                {/*  tab customer  */}
                <div className="tab-pane fade" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
                  <form className="pt-4" onSubmit={handleSubmitCust}>
                    <div className="mb-3">
                      <input type="email" className="form-control" id="emailCust" name="emailCust" placeholder="Email" value={emailCust} onChange={(e) => setEmailCust(e.target.value)} />
                    </div>

                    <div className="mb-3">
                      <input type="password" className="form-control" id="passwordCust" name="passwordCust" placeholder="Password" value={passwordCust} onChange={(e) => setPasswordCust(e.target.value)} />
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
                        Don't have a Blanja account ? <Link to={`/register`}>Register</Link>
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

export default Login;
