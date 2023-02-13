import React from 'react';
import Profile from '../../Assets/images/profile/christian-buehner-DItYlc26zVI-unsplash 1.png';

const HeaderProfile = () => {
  return (
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
  );
};

export default HeaderProfile;
