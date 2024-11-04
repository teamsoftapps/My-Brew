// MainStack.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Screens/Home";
import BrewCollection from "../Screens/BrewCollection";
import ExploreBrews from "../Screens/ExploreBrews";
import MyNotes from "../Screens/MyNotes";
import Navbar from "../components/Navbar"; // Adjust the path as necessary

const MainStack = ({ isAuthenticated, onLogout }) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      {/* Pass isAuthenticated to Navbar */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BrewCollection" element={<BrewCollection />} />
        <Route path="/ExploreBrews" element={<ExploreBrews />} />
        <Route path="/MyNotes" element={<MyNotes />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </>
  );
};

export default MainStack;
