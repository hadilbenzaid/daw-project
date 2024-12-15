import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../public/Svgs";

const InscriptionV = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [terms,setTerms]=useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  
  

  return (
    <div className="h-screen rounded-lg  w-screen flex justify-center items-center bg-gray-100">
    <div className="flex rounded-lg  w-[900px] h-[500px] bg-white shadow-lg overflow-hidden">
   
    <div className="flex-[3] bg-white rounded-xl px-4 py-16 flex flex-col justify-center items-center">
      
      <h1 className="uppercase font-bold text-[24px] text-blue-600 py-4">
      Create an Account
      </h1>
     
      <form
        method="post"
        className="w-[70%] flex flex-col gap-6 justify-center items-center"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300   rounded px-4 py-2 focus:outline-blue-600"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
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
        <label
          className="flex justify-center items-center gap-3"
          htmlFor="term"
        >
     
        </label>
        <button
  className="bg-blue-600 px-4 py-3 w-[50%] rounded-3xl text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
  onClick={(e) => {
    handleLogin(e);
  }}
>
  SIGN UP
</button>
      </form>
  
    </div>
    <div className="flex-[2] bg-blue-600 text-white flex flex-col justify-center items-center px-10">
<h1 className="text-4xl font-bold mb-4">Welcome!</h1>
<p className="text-lg mb-6">
  To keep connected with us please login with your personal info
</p>

</div>
</div>
</div>
  );
};

export default InscriptionV;
