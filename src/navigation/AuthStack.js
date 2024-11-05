// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import SignUp from "../Screens/signUp";
// import SignIn from "../Screens/SignIn";

// const AuthStack = ({ onSignIn }) => {
//   return (
//     <Routes>
//       <Route path="/" element={<SignUp />} />
//       <Route path="/SignIn" element={<SignIn onSignIn={onSignIn} />} />
//     </Routes>
//   );
// };

// export default AuthStack;

import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SignUp from "../Screens/signUp";
import SignIn from "../Screens/SignIn";

const AuthStack = ({ onSignIn, isAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      isAuthenticated &&
      (location.pathname === "/SignIn" || location.pathname === "/")
    ) {
      navigate("/Home", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn onSignIn={onSignIn} />} />
    </Routes>
  );
};

export default AuthStack;
