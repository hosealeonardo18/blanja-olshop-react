import React from 'react';

import Navbar from '../Components/Navbar';
import NavbarLogin from '../Components/NavbarLogin';
import Carousell from '../Components/Carousell';
import Category from '../Components/Category';
import Products from '../Components/Products';
import Popular from '../Components/Popular';

const Home = () => {
  const isLogin = localStorage.getItem('token');

  if (!isLogin) {
    return (
      <>
        <Navbar />
        <Carousell />
        <Category />
        <Products />
        <Popular />
      </>
    );
  } else {
    return (
      <>
        <body>
          <NavbarLogin />
          <Carousell />
          <Category />
          <Products />
          <Popular />
        </body>
      </>
    );
  }
};

export default Home;
