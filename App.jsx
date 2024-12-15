import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Layouts/Loginn";
import SignUp from "./Layouts/Inscription"; 
import InscriptionTeacher from "./Layouts/inscriptionTeacher";
import Dashboard from "./Layouts/Dashboard";
import Profile from "./Layouts/Profile";
import Notification from "./Layouts/Notification";
import Chat from "./Layouts/Chat"; 
import Projects from "./Layouts/Projects";

  

function App() {
  return (
    <Router>
      <Routes>
      <Route path="//Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/inscriptionTeacher" element={<InscriptionTeacher />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;
