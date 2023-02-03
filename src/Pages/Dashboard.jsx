import React from 'react';
import MainSidebar from '../Components/MainSidebar';
import NavbarLogin from '../Components/NavbarLogin';
import SidebarProfile from '../Components/SidebarProfile.jsx';

const Dashboard = () => {
  return (
    <>
      <body id="sidebar">
        <NavbarLogin />
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
          <SidebarProfile />
          <MainSidebar />
        </div>
      </body>
    </>
  );
};

export default Dashboard;
