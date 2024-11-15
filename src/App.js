import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/mainStack";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state?.Auth?.data?.isToken);
  console.log("Token we get:", token);

  return (
    <Router>
      <Routes>
        {token ? (
          <Route path="/*" element={<MainStack />} />
        ) : (
          <Route path="/*" element={<AuthStack />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
