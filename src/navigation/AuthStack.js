import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Screens/signUp";
import SignIn from "../Screens/SignIn";

const AuthStack = ({ onSignIn }) => {
  return (
    <Routes>
      <Route path="/" element={<SignUp onSignIn={onSignIn} />} />
      <Route path="/SignIn" element={<SignIn onSignIn={onSignIn} />} />
    </Routes>
  );
};

export default AuthStack;
