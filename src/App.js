import "./App.css";
import React from "react";
import Workspace from "./Pages/Workspace";
import RegistrationFrm from "./components/RegistrationFrm";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/register" element={<RegistrationFrm />} />
          {/* <Route path="/" element={<Workspace />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
