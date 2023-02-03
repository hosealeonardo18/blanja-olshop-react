import React from 'react';
import logo from '../../Assets/images/icon/logo.png';
import color1 from '../../Assets/images/colors/Ellipse.png';
import color2 from '../../Assets/images/colors/Ellipse-1.png';
import color3 from '../../Assets/images/colors/Ellipse-2.png';
import color4 from '../../Assets/images/colors/Ellipse-3.png';
import color5 from '../../Assets/images/colors/Ellipse 5.png';
import color6 from '../../Assets/images/colors/Ellipse 6.png';
import color7 from '../../Assets/images/colors/Ellipse 7.png';
import color8 from '../../Assets/images/colors/Ellipse 8.png';
import imgProfile from '../../Assets/images/profile/christian-buehner-DItYlc26zVI-unsplash 1.png';
import { useNavigate } from 'react-router-dom';

const NavbarLogin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/home');
    window.location.reload();
  };

  const handleProfile = () => {
    navigate('/dashboard');
    window.location.reload();
  };

  return (
    <>
      <header id="navbar" className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="Logo" className="d-inline-block align-text-top me-3" />
              Blanja
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <form class="d-flex position-relative search" role="search">
                <input class="form-control form-search me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-search position-absolute " type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </form>

              {/* button fiter */}
              <button class="btn btn-outline-success me-auto" type="button" data-bs-toggle="modal" data-bs-target="#filter">
                <i class="bi bi-funnel"></i>
              </button>

              {/* end filter */}

              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item d-flex">
                  <a className="nav-link" aria-current="page" href="#">
                    <i className="bi bi-cart2"></i>
                  </a>

                  <a className="nav-link" aria-current="page" href="#">
                    <i class="bi bi-bell"></i>
                  </a>

                  <a className="nav-link" aria-current="page" href="#">
                    <i class="bi bi-envelope"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <button type="button" class="btn btn-profile " onClick={handleProfile}>
                    <img className="btnProfile" src={imgProfile} alt="" />
                  </button>
                </li>

                <li className="nav-item">
                  <button className="btn btn-login" type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="modal fade" id="filter" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="filterLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="filterLabel">
                Filter
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Colors</span>

                    <div className="color-pallets d-flex pt-3">
                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color1} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color2} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color3} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color4} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color5} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color6} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color7} alt="" />
                      </button>

                      <button type="button" className="btn btn-color" data-bs-toggle="button">
                        <img className="color" src={color8} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Sizes</span>

                    <div className="size-charts d-flex pt-3">
                      <button type="button" className="btn btn-size" data-bs-toggle="button">
                        <span className="text-size text-center">XS</span>
                      </button>

                      <button type="button" className="btn btn-size" data-bs-toggle="button">
                        <span className="text-size text-center">S</span>
                      </button>

                      <button type="button" className="btn btn-size" data-bs-toggle="button">
                        <span className="text-size text-center">M</span>
                      </button>

                      <button type="button" className="btn btn-size active" data-bs-toggle="button">
                        <span className="text-size text-center">L</span>
                      </button>

                      <button type="button" className="btn btn-size" data-bs-toggle="button">
                        <span className="text-size text-center">XL</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mb-1">
                <div className="row">
                  <span className="text-color">Category</span>
                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button type="button" className="btn btn-category" data-bs-toggle="button">
                        <span className="text-categories text-center">All</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button type="button" className="btn btn-category" data-bs-toggle="button">
                        <span className="text-categories text-center">Woman</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button type="button" className="btn btn-category" data-bs-toggle="button">
                        <span className="text-categories text-center">Man</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button type="button" className="btn btn-category" data-bs-toggle="button">
                        <span className="text-categories text-center">Boys</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button type="button" className="btn btn-category" data-bs-toggle="button">
                        <span className="text-categories text-center">Girls</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Brand</span>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>
                        <span className="">Adidas Originals, Jack & Jones, S.Oliver</span>
                      </option>
                      <option value="1">Adidas Originals</option>
                      <option value="2">Jack & Jones</option>
                      <option value="3">S.Olive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn btn-discard" data-bs-dismiss="modal">
                      Discard
                    </button>
                  </div>

                  <div className="col-6">
                    <button type="button" className="btn btn-apply">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLogin;
