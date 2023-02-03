import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../../Pages/Auth/Login';
import Register from '../../Pages/Auth/Register';
import Dashboard from '../../Pages/Dashboard';
import Detail from '../../Pages/Detail';
import RequireAuth from '../../Components/RequireAuth';

import Home from '../../Pages/Home';
import Page404 from '../../Pages/Page404';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Detail />} />

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
