import React from 'react';
import SidebarProfile from '../../Components/SidebarProfile/index.jsx';
import NavbarLogin from '../../Components/NavbarLogin';
import MainSidebar from '../../Components/MainSidebar/index.jsx';

const MyProduct = () => {
  return (
    <>
      <body id="sidebar">
        <NavbarLogin />
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
          <div className="sidebar vh-100 w-25 d-flex">
            <SidebarProfile />
          </div>
          <div className="main-content vh-100">
            <div className="container">
              <div className="wrapper-card">
                <MainSidebar />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default MyProduct;
