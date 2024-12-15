import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaTasks, FaUserCircle, FaBell } from "react-icons/fa";
import { FiLogOut, FiMessageCircle, FiSettings } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const role = "students";
  const [showlist, setShowlist] = useState(false);

  const projects = [
    { name: "Project OA", status: "Accepted" },
    { name: "Project OB", status: "Waiting" },
    { name: "Project OC", status: "Rejected" },
    { name: "Project OD", status: "Accepted" },
  ];

  const toggleDialog = () => {
    setShowlist(!showlist);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-white w-64 p-4 hidden md:block">
          <ul className="space-y-4">
            <h1 className="text-2xl font-bold pb-6">Ourwebsite</h1>
            <li className="hover:scale-105 transition-transform duration-300 transform p-2 rounded-3xl cursor-pointer flex items-center space-x-2">
              <MdDashboard className="text-xl text-blue-600" />
              <span>Dashboard</span>
            </li>
            <li className="hover:scale-105 transition-transform duration-300 transform p-2 rounded-3xl cursor-pointer flex items-center space-x-2">
              <Link to="/projects" className="flex items-center space-x-2">
                <FaTasks className="text-xl text-blue-600" />
                <span>Projects</span>
              </Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-300 transform p-2 rounded-3xl cursor-pointer flex items-center space-x-2">
              <FiSettings className="text-xl text-blue-600" />
              <span>Settings</span>
            </li>
            <li>
              {/* Logout */}
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-3xl py-2 px-3">
                <FiLogOut className="text-2xl text-blue-600" />
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
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
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-3xl py-2 px-2">
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
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-3xl py-2 px-2">
                <Link to="/Profile">
                  <FaUserCircle className="text-2xl text-black" />
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Dashboard Content */}
          <main className="flex-1 bg-gray-100 p-6">
            {/* Dashboard Header */}
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
            </header>

            {/* Stats Section */}
            <div className="p-6">{role === "students" &&(

            <section className="grid grid-cols-1 gap-4">
           
              {/* Applications Sent */}

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col relative">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Applications Sent</h2>
                  <button
                    onClick={toggleDialog}
                    className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none relative top-10"
                  >
                    Show Projects
                  </button>
                </div>
                <p className="text-3xl font-bold">28</p>
              </div>

              {/* Project List */}
              {showlist && (
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Projects List</h3>
                   
                  </div>
                  {/* Project List Items */}
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <label className="text-gray-800 font-medium">
                          {project.name}
                          
                        </label>
                        <button
                          className={`  text-xs  font-bold rounded px-4 py-2 ${
                            project.status === "Accepted"
                              ? " text-green-500"
                              : project.status === "Rejected"
                              ? " text-red-500"
                              : " text-yellow-500"
                          }`}
                        >
                          {project.status}
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                      onClick={toggleDialog}
                      className="px-3 py-1 text-sm text-red-600 hover:text-red-800 focus:outline-none relative top-4 "
                    >
                      Close
                    </button>
                </div>
              )}
            </section>
            )}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
