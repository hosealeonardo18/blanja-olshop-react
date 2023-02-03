import React from 'react';

import NavbarLogin from '../Components/NavbarLogin';
import Popular from '../Components/Popular';

const DetailProduct = () => {
  // const isLogin = localStorage.getItem('token');

  return (
    <>
      <body>
        <NavbarLogin />
        <Popular />
      </body>
    </>
  );
};

export default DetailProduct;
