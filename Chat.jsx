import React, { useState } from 'react';
import { FaUserCircle, FaBell,FaTasks } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiLogOut, FiMessageCircle, FiSettings,FiArrowUpRight } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


function Chat() {

  const [activeUser, setActiveUser] = useState("Ahmed");
  const [messageData, setMessageData] = useState({
    Ahmed: [
      { id: 1, text: "Are we meeting today?", sender: "other" },
      { id: 2, text: "Sure, what time?", sender: "me" }
    ],
    "AbdelKarim bouramoul": [
      { id: 1, text: "Hey! Listen", sender: "other" },
      { id: 2, text: "HELLO", sender: "me" }
    ],
  });

  const activeMessages = messageData[activeUser] || [];

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessageData((prev) => ({
        ...prev,
        [activeUser]: [
          ...(prev[activeUser] || []),
          { id: Date.now(), text: newMessage, sender: "me" }
        ]
      }));
      setNewMessage(""); 
    }
  };
  
  
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
         <span>Dashboard</span>
        </li>
        </Link>
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
    <div className="flex h-screen bg-gray-100 rounded-xl">
      {/* Sidebar */}
      <aside className="w-1/4 border-r bg-gray-50 border-gray-200 overflow-y-auto">
      <header className="p-4 border-gray-200 bg-white">
          <h1 className="text-xl font-semibold  text-blue-600">Chats</h1>
        </header>
        <div className="py-4 px-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring"
          />
        </div>
        <div
  className={`p-4 flex items-center gap-3 cursor-pointer shadow-md rounded-xl border-gray-200 ${
    activeUser === "Ahmed"
      ? "bg-blue-600 text-white"
      : "bg-white text-black hover:bg-blue-600 hover:text-white"
  }`}
  onClick={() => setActiveUser("Ahmed")}
>
  <div>
    <p className="font-medium">Ahmed</p>
    <p className="text-sm">Are we meeting today?</p>
  </div>
</div>

<div
  className={`p-4 flex items-center gap-3 cursor-pointer shadow-md rounded-xl border-gray-200 ${
    activeUser === "AbdelKarim bouramoul"
      ? "bg-blue-600 text-white"
      : "bg-white text-black hover:bg-blue-600 hover:text-white"
  }`}
  onClick={() => setActiveUser("AbdelKarim bouramoul")}
>
  <div>
    <p className="font-medium">Abdelkarim bouramoul</p>
    <p className="text-sm">Are we meeting today?</p>
  </div>
</div>
      </aside>

      
     {/* Main Chat Area */}
<main className="flex-1 flex flex-col">
  <header className="p-4 border-b border-gray-200 bg-white">
    <h1 className="text-lg font-medium">{activeUser}</h1>
  </header>

  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
    {activeMessages.map((msg) => (
      <div
        key={msg.id}
        className={`mb-4 ${msg.sender === "me" ? "text-right" : ""}`}
      >
        <div
          className={`${
            msg.sender === "me"
              ? "bg-blue-600 text-white ml-auto"
              : "bg-gray-200"
          } px-3 py-2 rounded-3xl w-fit max-w-xs`}
        >
          {msg.text}
        </div>
      </div>
    ))}
  </div>

  <footer className="p-4 bg-white border-t border-gray-200">
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message here..."
        className="flex-1 px-4 py-2 border rounded-3xl focus:outline-none focus:ring"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-2 py-2 rounded-3xl flex items-center gap-2"
      >
        <FiArrowUpRight className="h-5 w-5 transform rotate-45" />
      </button>
    </div>
  </footer>
</main>

    </div>
  </div>
        </main>
      </div>
    </div>
  </div>
  );
}

export default Chat;

