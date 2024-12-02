import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Screens/signUp";
import SignIn from "../Screens/SignIn";
import ForgetPassword from "../Screens/forgetPassword";
import OTP from "../Screens/Otp";
import ResetPassword from "../Screens/ResetPassword";
import ResetSuccessfull from "../Screens/ResetSuccessful";

const AuthStack = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/Otp" element={<OTP />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/ResetSuccessfull" element={<ResetSuccessfull />} />
    </Routes>
  );
};

export default AuthStack;
