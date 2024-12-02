import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/mainStack";
import PublicStack from "./navigation/PublicStack";

const App = () => {
  const token = useSelector((state) => state?.Auth?.data?.isToken);

  return (
    <Router>
      <PublicStack />
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
