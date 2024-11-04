// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/signUp";
import BrewCollection from "../Screens/BrewCollection";
import ExploreBrews from "../Screens/ExploreBrews";
import MyNotes from "../Screens/MyNotes";

const MainStack = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BrewCollection" element={<BrewCollection />} />
        <Route path="/ExploreBrews" element={<ExploreBrews />} />
        <Route path="/MyNotes" element={<MyNotes />} />
      </Routes>
    </Router>
  );
};

export default MainStack;
