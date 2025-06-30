// pages/AccessoryLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AccessoryLayout = () => {
  return (
    <div className="flex mt-32 items-start">
      <Sidebar />
      <div className="w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AccessoryLayout;
