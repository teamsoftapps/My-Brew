// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/signUp";
import BrewCollection from "../Screens/BrewCollection";
import ExploreBrews from "../Screens/ExploreBrews";

const MainStack = () => {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BrewCollection" element={<BrewCollection />} />
        <Route path="/ExploreBrews" element={<ExploreBrews />} />
      </Routes>
    </Router>
  );
};

export default MainStack;
