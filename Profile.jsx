import React, { useState } from "react";
import { FaUserCircle, FaBell,FaTasks } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiLogOut, FiMessageCircle, FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    role:"",
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pic:"",
    goals: [
      "Need to know whether his projects are returning good value",
      "Stay ahead of the target audience",
      "Redesign the business website to be responsive and up to date",
    ],
    painPoints: [
      "Not being able to get a clear answer",
      "Not understanding why a product or service is not progressing",
      "Not having a clear CTA on his website",
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Add functionality to save the updated user info ( API call)
    setIsEditing(false);
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
           <FaTasks className="text-xl text-blue-600" />
           <span>Projects</span>
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
              <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 transform hover:scale-105  rounded-3xl py-2 px-2">
                <Link to="/Profile">
                <FaUserCircle className="text-2xl text-black" />
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-6">
          <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Profile</h1>
      </header>
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Left Section: Image and Quote */}
      <div className="bg-gray-100 p-6 flex flex-col items-center justify-center lg:w-1/3">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mb-4 w-32 h-32"
        />
        {isEditing ? (
            <textarea
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows="4"
            />
          ) : (
        <h2 className="text-3xl font-semibold mb-2">{user.name}</h2>)}
      </div>

      {/* Right Section: User Info */}
      <div className="p-6 flex-1 lg:w-2/3">
        {/* Bio */}
        <div className="mb-6">
          <h4 className="text-gray-700 font-semibold mb-2">Bio</h4>
          {isEditing ? (
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows="4"
            />
          ) : (
            <p className="text-gray-600">{user.bio}</p>
          )}
        </div>

        {/* Goals */}
        <div className="mb-6">
          <h4 className="text-gray-700 font-semibold mb-2">Goals</h4>
          {isEditing ? (
            <textarea
              name="goals"
              value={user.goals}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows="4"
            />
          ) : (
          <ul className="list-disc pl-5 text-gray-600">
            {user.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>)}
          </div>

{/* Pain Points */}
<div className="mb-6">
  <h4 className="text-gray-700 font-semibold mb-2">Pain Points</h4>
  {isEditing ? (
            <textarea
              name="painPoints"
              value={user.painPoints}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows="4"
            />
          ) : (
  <ul className="list-disc pl-5 text-gray-600">
    {user.painPoints.map((pain, index) => (
      <li key={index}>{pain}</li>
    ))}
  </ul>)}
</div>

{/* Buttons */}
<div className="flex gap-4">
  {isEditing ? (
    <button
      onClick={handleSave}
      className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700"
    >
      Save
    </button>
  ) : (
    <button
      onClick={() => setIsEditing(true)}
      className="bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700"
    >
       Edit
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
