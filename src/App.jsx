import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import { createContext, useEffect, useState } from "react";
import TryoutPage from "./pages/TryoutPage";

export const UserContext = createContext({});

function App() {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const access = localStorage.getItem("user");
    access ? setAccessToken(access) : setAccessToken(null);
  }, []);

  return (
    <UserContext.Provider value={{ accessToken, setAccessToken }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              accessToken === null ? <Navigate to="/login" /> : <HomePage />
            }
          />
          <Route
            path="/login"
            element={
              accessToken === null ? <AuthPage /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            path="/dashboard"
            element={
              accessToken === null ? <Navigate to="/login" /> : <Dashboard />
            }
          />
          <Route
            path="/tryout"
            element={
              accessToken === null ? <Navigate to="/login" /> : <TryoutPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
