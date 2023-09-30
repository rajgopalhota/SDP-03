import "./App.css";
import Home from "./components/Home";
import Loans from "./components/Loans";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <section className="mainbodysection">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
