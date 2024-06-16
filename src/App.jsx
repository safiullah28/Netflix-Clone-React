import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
};

export default App;
