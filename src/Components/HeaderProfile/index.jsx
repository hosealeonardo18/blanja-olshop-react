import React from 'react';
import Profile from '../../Assets/images/profile/formal.png';

const HeaderProfile = () => {
  return (
    <div className="header">
      <div className="wrapper-img d-flex">
        <img className="profile-images" src={Profile} style={{ objectFit: 'cover', width: '60px', height: '60px' }} alt="" />
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
