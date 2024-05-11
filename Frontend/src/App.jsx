import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./Hooks/useAuthContext";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import TaskFormUpdate from "./Components/TaskUpdateForm";
import TaskInfo from "./Components/TaskInfo";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const App = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/update/:id" element={<TaskFormUpdate />} />
        <Route path="/detail/:id" element={<TaskInfo />} />
      </Routes>
    </>
  );
};

export default App;
