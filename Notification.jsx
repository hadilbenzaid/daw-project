import React from "react";
import { useState, useEffect } from 'react';
import { FaUserCircle, FaBell,FaTasks } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiLogOut, FiMessageCircle, FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const notifications = [
  
  {
    id: 1,
    message: "Someone wants to join",
    actions: ["Confirm", "Decline"],
    date: "July 17, 2016",
  },
  {
    id: 2,
    message: "someone accepted your invitation",
    link: "See project",
    date: "September 17, 2016",
  },
  {
    id: 3,
    message: "someone accepted your invitation",
    link: "See project",

    date: "July 17, 2016",
  },
  {
    id: 4,
    message: "someone refused your invitation",
    link: "See project",
    
    date: "September 17, 2016",
  },
  {
    id: 5,
    message: "Max invites you to join the Microsoft organization",
    actions: ["Confirm", "Decline"],
    date: "July 17, 2016",
  },
];



const Notification = () => {
  const role = "admin"; // roles: "student", "teacher", "admin"

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-white w-64 p-4 hidden md:block">
          <ul className="space-y-4">
          <h1 className="text-2xl font-bold pb-6">Ourwebsite</h1>
          <Link to="/Dashboard">
          <li className="hover:scale-105 transition-transform duration-300 transform p-2 rounded-3xl cursor-pointer flex items-center space-x-2">
           <MdDashboard className="text-xl text-blue-600" />
           <span>
            Dashboard
          </span>
          </li>
          </Link>
          <Link to="/Projects">
          <li className="hover:scale-105 transition-transform duration-300 transform p-2 rounded-3xl cursor-pointer flex items-center space-x-2">
           <FaTasks className="text-xl text-blue-600" />
           <span>Projects</span>
          </li>
          </Link>
          
          <li>
              {/* Logout */}
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-3xl py-2 px-3">
                <FiLogOut className="text-2xl text-blue-600" />
                <span>Logout</span>
              </div>
           </li>
          </ul>
        </aside>

        {/* Main Content Container */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <nav className="bg-white text-white h-16 flex items-center px-4">
            {/* Search Bar */}
            <div className="flex-grow flex justify-start">
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-black rounded-full pl-8 pr-4 py-2 w-full focus:outline-none"
                />
                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Message */}
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105  rounded-3xl py-2 px-2">
                  <Link to="/Chat">
              <FiMessageCircle className="text-2xl text-black" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Link>
              </div>
              {/* Notifications */}
              <div className="relative flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-3xl py-2 px-3">
                 <Link to="/Notification">
                <FaBell className="text-2xl text-black" />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center -mt-1 -mr-1">
                  3
                </span>
                </Link>
              </div>

              {/* Profile */}
              <Link to="/Profile">
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105  rounded-3xl py-2 px-2">
                <FaUserCircle className="text-2xl text-black" />
              </div>
              </Link>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-6">
          <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Notifications</h1>
      </header>
      {role === "student" && (
          <div className="max-w-4xl mx-auto space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white shadow-sm rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-800">{notification.message}</p>
              <div className="flex space-x-2">
                {notification.actions ? (
                  notification.actions.map((action, index) => (
                    <button
                      key={index}
                      className={`${
                        action === "Confirm"
                          ? " text-green-500 font-medium hover:scale-105 "
                          : " text-red-500 font-medium hover:scale-105 "
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      {action}
                    </button>
                  ))
                ) : (
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {notification.link}
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">{notification.date}</p>
          </div>
        ))}
        <div className="flex justify-center">
        <button className="px-4 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded-lg">
          Load more
        </button>
        </div>
      </div>
       )}
       
              {role === "teacher" && (
                
                <div className="max-w-4xl mx-auto space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white shadow-sm rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-800">{notification.message}</p>
              <div className="flex space-x-2">
                {notification.actions ? (
                  notification.actions.map((action, index) => (
                    <button
                      key={index}
                      className={`${
                        action === "Confirm"
                          ? " text-green-500 font-medium hover:scale-105 "
                          : " text-red-500 font-medium hover:scale-105 "
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      {action}
                    </button>
                  ))
                ) : (
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {notification.link}
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">{notification.date}</p>
          </div>
        ))}
        <div className="flex justify-center">
        <button className="px-4 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded-lg">
          Load more
        </button>
        </div>
      </div>
              
              )}
        
              {role === "admin" && (
                <div className="max-w-4xl mx-auto space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-white shadow-sm rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800">{notification.message}</p>
                      <div className="flex space-x-2">
                        {notification.actions ? (
                          notification.actions.map((action, index) => (
                            <button
                              key={index}
                              className={`${
                                action === "Confirm"
                                  ? " text-green-500 font-medium hover:scale-105 "
                                  : " text-red-500 font-medium hover:scale-105 "
                              } px-3 py-1 rounded-full text-sm`}
                            >
                              {action}
                            </button>
                          ))
                        ) : (
                          <a
                            href="#"
                            className="text-blue-500 hover:underline text-sm"
                          >
                            {notification.link}
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">{notification.date}</p>
                  </div>
                ))}
                <div className="flex justify-center">
                <button className="px-4 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded-lg">
                  Load more
                </button>
                </div>
              </div>
              )}
          </main>
        </div>
      </div>
    </div>
  );
};
export default Notification;
