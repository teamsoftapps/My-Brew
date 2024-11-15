import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Screens/signUp";
import SignIn from "../Screens/SignIn";

const AuthStack = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
};

export default AuthStack;
