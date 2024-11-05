import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/mainStack";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route
            path="/*"
            element={
              <MainStack
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
            }
          />
        ) : (
          <Route
            path="/*"
            element={
              <AuthStack
                onSignIn={handleSignIn}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        )}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/Home" : "/SignIn"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
