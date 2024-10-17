import "./App.css";
import FileUploadComponent from "./Components/FileUploadComponent";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import React from "react";
import { AuthProvider } from "./Components/AuthContext";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<FileUploadComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
