import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthStack from "./navigation/AuthStack"; // Adjust the import path as needed
import MainStack from "./navigation/mainStack"; // Adjust the import path as needed

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Boolean state for authentication

  const handleSignIn = () => {
    setIsAuthenticated(true); // Set to true on sign-in
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set to false on logout
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
          <Route path="/*" element={<AuthStack onSignIn={handleSignIn} />} />
        )}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/Home" : "/"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
