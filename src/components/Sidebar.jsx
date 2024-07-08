import React, { useState } from "react";
import {
  FaArrowCircleLeft,
  FaHome,
  FaSearch,
  FaUser,
  FaCog,
  FaChartBar,
  FaEnvelope,
} from "react-icons/fa";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-blue-800 h-screen p-5 pt-8 relative duration-300`}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <FaArrowCircleLeft color="white" size={20} />
        </button>
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            SideBar Task
          </h1>
        </div>
        <ul className="pt-6">
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaHome size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Dashboard
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaSearch size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Search
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaUser size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Profile
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaCog size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Settings
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaChartBar size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Analytics
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaEnvelope size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Messages
            </span>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 bg-slate-800">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

export default Sidebar;
