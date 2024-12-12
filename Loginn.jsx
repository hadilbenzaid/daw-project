import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl} from "../public/Svgs";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [insc, setInsc] = useState(false);
  const [showOptions, setShowOptions] = useState(false); 
  return (
    <div className="h-screen w-screen rounded-lg  flex justify-center items-center bg-gray-100">
    <div className="flex w-[900px] rounded-lg  h-[500px] bg-white shadow-lg overflow-hidden">
    <div className="flex-[2] bg-blue-600 text-white flex flex-col justify-between px-10 py-6">
  {/* Centered Section: Welcome Back */}
  <div className="flex flex-col justify-center items-center flex-grow">
    <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
  </div>

  <div className="flex flex-col items-center">
      {/* "Sign Up" Section */}
      <p className="mb-4 ">
        Don't have an account?{" "}
        <span
          className="font-bold hover:cursor-pointer"
          onClick={() => setShowOptions(!showOptions)} // Toggle options on click
        >
          Sign Up
        </span>
      </p>

      {/* Options Section */}
      {showOptions && ( // Render only if showOptions is true
        <div className="flex items-center space-x-6">
          <span
            onClick={() => setInsc(true)}
            className="font-bold hover:cursor-pointer transition-transform duration-200 transform hover:translate-y-[-2px]"
          >
            <Link to="/SignUp" className="w-full">
              as a student
            </Link>
          </span>
          <span
            onClick={() => setInsc(true)}
            className="font-bold hover:cursor-pointer transition-transform duration-200 transform hover:translate-y-[-2px]"
          >
            <Link to="/inscriptionTeacher" className="w-full">
              as a teacher
            </Link>
          </span>
        </div>
      )}
    </div>
  
</div>

    <div  className="flex-[3] bg-white rounded-xl px-4 py-16 flex flex-col justify-center items-center">
      
      <h1 className="uppercase font-bold text-[24px] text-blue-600 py-4">
      
      Login to website
      
      </h1>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-sm w-10 h-10 flex justify-center items-center rounded-full border border-black hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
           <FaFacebookF />
       </a>

        <a
          href="mailto:someone@example.com"
          className="bg-white text-black text-sm w-10 h-10 flex justify-center items-center rounded-full border border-black hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black text-sm w-10 h-10 flex justify-center items-center rounded-full border border-black hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <form
        method="post"
        className="w-[70%] flex flex-col gap-5 justify-center items-center"
        onSubmit={handleLogin}
      >
        
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300   rounded px-4 py-2 focus:outline-blue-600"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300   rounded px-4 py-2 focus:outline-blue-600"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-blue-600 px-4 py-3 w-[50%] rounded-3xl text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
         onClick={(e) => {handleLogin(e);}}>
          SIGN IN
        </button>
<p className="text-gray-500 font-semibold text-sm ">
            Forgot your password?
          </p>
      </form>
  
    </div>
    
  </div>
</div>
  );
};

export default Login;
