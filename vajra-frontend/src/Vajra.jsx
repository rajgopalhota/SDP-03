import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loans from "./components/Loans";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Register from "./components/Register";
import Transactions from "./components/Transactions";

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
            <Route path="/transaction" element={<Transactions />} />
            
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
