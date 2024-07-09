import React, { useState } from "react";
import profile from "../assets/profile.jpg";
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
          <FaArrowCircleLeft color="white" size={18} />
        </button>
        <div className="flex gap-x-4 items-center justify-start">
          <img
            src={profile}
            onClick={() => setOpen(!open)}
            className={`cursor-pointer duration-500 h-8 w-8 rounded-full ${
              open && "rotate-[360deg] h-12 w-12"
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
        <ul className="flex pt-10 flex-col gap-7">
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaHome size={20} />
            <h1
              className={`${
                !open && "hidden"
              }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
            >
              Dashboard
            </h1>
          </li>

          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaUser size={20} />
            <h1
              className={`${
                !open && "hidden"
              }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
            >
              Profile
            </h1>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
            <FaCog size={20} />
            <h1
              className={`${
                !open && "hidden"
              }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
            >
              Settings
            </h1>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-slate-900 text-gray-300 text-sm items-center gap-x-4">
            <FaChartBar size={20} />
            <h1
              className={`${
                !open && "hidden"
              } o text-white origin-left font-medium text-xl duration-200 hover:text-black`}
            >
              Analytics
            </h1>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-slate-950 text-gr text-gray-300 text-sm items-center gap-x-4">
            <FaEnvelope size={20} />
            <h1
              className={`${
                !open && "hidden"
              }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
            >
              Messages
            </h1>
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
