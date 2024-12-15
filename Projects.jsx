import React, { useState } from "react";
import { FaUserCircle, FaBell, FaTasks } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import {
  FiLogOut,
  FiMessageCircle,
  FiSettings,
  FiArrowDown,
  FiArrowUp,
} from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  const role = "student"; // roles: "student", "teacher", "admin"

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project A",
      description: "Description A",
      details: "Detailed information about Project A.",
      domaine:"TI",
      accepted: true,
    },
    {
      id: 2,
      title: "Project B",
      description: "Description B",
      details: "Detailed information about Project B.",
      accepted: false,
    },
  ]);
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    partners: "",
    email: "",
    teamSize: "monome",
  });
  const [newProject, setNewProject] = useState({ title: "", description: "", domaine:"" });

  const [joinFormVisible, setJoinFormVisible] = useState(null);
  
  const handleJoinClick = (id) => {
    if (joinFormVisible === id) {
      if (studentInfo.name && studentInfo.partners && studentInfo.email) {
        console.log(`Student Info:`, studentInfo); // Replace with actual submission logic
        setStudentInfo({ name: "", partners: "", email: "" }); // Reset form
        setJoinFormVisible(null); // Hide the form after submission
      } else {
        alert("Please fill in all the fields before submitting.");
      }
    } else {
      setJoinFormVisible(id);
    }
  };
  
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleTeamSizeChange = (e) => {
    const teamSize = e.target.value;
    const partnerCount = teamSize === "binome" ? 1 : teamSize === "trinome" ? 2 : 0;
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      teamSize,
      partners: Array(partnerCount).fill({ name: "", email: "" }),
    }));
  };

  const handlePartnerChange = (index, field, value) => {
    const updatedPartners = [...studentInfo.partners];
    updatedPartners[index] = { ...updatedPartners[index], [field]: value };
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      partners: updatedPartners,
    }));
  };

  const handleSubmitForm = () => {
    // Process the form data (e.g., send it to a server or save it locally)
    console.log(`Student Info:`, studentInfo);

    // Reset form
    setStudentInfo({ name: "", partners: "", email: "" });
    setJoinFormVisible(null); // Hide the form after submission
  };


  const [isAdding, setIsAdding] = useState(false); // To toggle the form modal

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const addProject = () => {
    setProjects([
      ...projects,
      { ...newProject, id: projects.length + 1, accepted: false },
    ]);
    setNewProject({ title: "", description: "",domaine:"" });
    setIsAdding(false); // Close the form modal after adding
  };

  const acceptProject = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, accepted: true } : project
      )
    );
  };

  const toggleExpand = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id)); // Toggle the expanded project
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
                <span>Dashboard</span><br/>
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
              <h1 className="text-2xl font-bold text-blue-600">Projects</h1>
            </header>
            <div className="p-6">
            {role === "student" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Available Projects</h2>
            <ul>
              {projects
                .filter((project) => project.accepted)
                .map((project) => (
                  <li
                    key={project.id}
                    className="bg-white shadow-sm rounded-xl p-4 border border-gray-200 relative transition-all duration-300"
                  >
                    <div className="flex justify-between items-center pb-2">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <button onClick={() => toggleExpand(project.id)}>
                        {expandedProjectId === project.id ? (
                          <FiArrowUp className="cursor-pointer" />
                        ) : (
                          <FiArrowDown className="cursor-pointer" />
                        )}
                      </button>
                    </div>
                    <p className="mt-2">{project.description}</p>
                    {expandedProjectId === project.id && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-700">{project.details}</p>
                      </div>
                    )}
                    <div className="absolute bottom-6 right-9">
                      <button
                        onClick={() => handleJoinClick(project.id)}
                        className={`px-4 py-1 rounded-xl ${
                          joinFormVisible === project.id
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-blue-500 hover:bg-blue-600"
                        } text-white`}
                      >
                        {joinFormVisible === project.id ? "Submit" : "Join Project"}
                      </button>
                    </div>

                    {/* Join Form */}
                    {joinFormVisible === project.id && (
                      <div className="mt-4 bg-gray-100 pb-14 p-6 rounded-xl">
                        <h4 className="font-bold text-lg mb-2">Join Project</h4>
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Name:
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={studentInfo.name}
                            onChange={handleFormChange}
                            className="w-full p-1 rounded-md border-gray-300 shadow-sm"
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Email:
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={studentInfo.email}
                            onChange={handleFormChange}
                            className="w-full rounded-md p-1 border-gray-300 shadow-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Team Size:
                          </label>
                          <select
                            name="teamSize"
                            value={studentInfo.teamSize}
                            onChange={handleTeamSizeChange}
                            className="w-full rounded-md  p-1 border-gray-300 shadow-sm"
                          >
                            <option value="monome">Monome</option>
                            <option value="binome">Binome</option>
                            <option value="trinome">Trinome</option>
                          </select>
                        </div>
                        {studentInfo.teamSize !== "monome" &&
                          studentInfo.partners.map((partner, index) => (
                            <div key={index} className="mb-4">
                              <h5 className="font-bold">Partner {index + 1}:</h5>
                              <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                  Name:
                                </label>
                                <input
                                  type="text"
                                  value={partner.name}
                                  onChange={(e) =>
                                    handlePartnerChange(index, "name", e.target.value)
                                  }
                                  className="w-full p-1 rounded-md border-gray-300 shadow-sm"
                                />
                              </div>
                              <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                  Email:
                                </label>
                                <input
                                  type="email"
                                  value={partner.email}
                                  onChange={(e) =>
                                    handlePartnerChange(index, "email", e.target.value)
                                  }
                                  className="w-full p-1 rounded-md border-gray-300 shadow-sm"
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        )}
    
              <div className="p-6">
              {role === "teacher" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Add a New Project</h2>
                  <div>
                  <ul>
                    <li>
                    <button
                  onClick={() => setIsAdding(true)}
                  className="bg-white shadow-sm rounded-xl p-4 border border-gray-200 relative mb-4"
                >
                  Add Project
                </button>
                    </li>
                    {projects.map((project) => (
                      <li
                        key={project.id}
                        className="bg-white shadow-sm rounded-xl p-4 border border-gray-200 relative mb-4"
                      >
                        <div className=" items-center">
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <h2>{project.domaine}</h2>
                          <p>{project.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Add Project Form */}
                  {isAdding && (
                    <div className="mt-4 bg-white p-4 shadow-md rounded-xl border border-gray-200">
                      <h3 className="font-bold mb-4">Add New Project</h3>
                      <div className="mb-4">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title:
                        </label>
                        <input
                          type="text"
                          id="title"
                          value={newProject.title}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              title: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="domaine"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Domaine:
                        </label>
                        <input
                          type="text"
                          id="domaine"
                          value={newProject.domaine}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              domaine: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description:
                        </label>
                        <textarea
                          id="description"
                          value={newProject.description}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              description: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={() => setIsAdding(false)}
                          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={addProject}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                </div>
              )}
              </div>
              {role === "admin" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Pending Projects</h2>
                  {/* Admin Role Content */}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;

