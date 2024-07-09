import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gradient-to-r bg-yellow-50 via-blue-400 w-full min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
