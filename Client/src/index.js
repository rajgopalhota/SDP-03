import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import "./Styles/Animations.css";
import App from "./Vajra";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
