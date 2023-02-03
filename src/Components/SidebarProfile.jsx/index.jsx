import React from 'react';
import Profile from '../../Assets/images/profile/christian-buehner-DItYlc26zVI-unsplash 1.png';
import IconAcc from '../../Assets/images/icon/home (2) 1.png';
import IconProduct from '../../Assets/images/icon/package 1.png';
import IconCart from '../../Assets/images/icon/shopping-cart (3) 1.png';
import '../../Assets/css/style.css';

const SidebarProfile = () => {
  return (
    <div className="sidebar vh-100 w-25 d-flex">
      <div className="header">
        <div className="wrapper-img d-flex">
          <img className="profile-images" src={Profile} alt="" />
          <div className="preferensi ms-3">
            <p className="mb-2 fw-bold">Johanes Mikael</p>
            <a href="">
              <i className="bi bi-pencil-fill me-2"></i>
              <span>Ubah profile</span>
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="list-item">
          <p>
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <img className="icon-profile" src={IconAcc} alt="" />
              <span className="description active ms-3">Store</span>{' '}
            </a>
          </p>

          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <a className="btn" href="#collapseExample">
                <span className="description">Store</span>
              </a>
            </div>
          </div>
        </div>

        <div className="list-item">
          <p>
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseProduct" role="button" aria-expanded="false" aria-controls="collapseProduct">
              <img className="icon-profile-product" src={IconProduct} alt="" />
              <span className="description active ms-3">Product</span>{' '}
            </a>
          </p>

          <div className="collapse" id="collapseProduct">
            <div className="card card-body">
              <a className="btn" href="#collapseProduct">
                <span className="description">My Products</span>
              </a>
            </div>
          </div>
        </div>

        <div className="list-item">
          <p>
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseCart" role="button" aria-expanded="false" aria-controls="collapseCart">
              <img className="icon-profile-cart" src={IconCart} alt="" />
              <span className="description active ms-3">Order</span>{' '}
            </a>
          </p>

          <div className="collapse" id="collapseCart">
            <div className="card card-body">
              <a className="btn" href="#collapseCart">
                <span className="description">List Order</span>
              </a>
              <a className="btn" href="#collapseCart">
                <span className="description">List Cancel Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
