import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Styles/App.css";
import AddCard from "./components/AddCard";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loans from "./components/Loans";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pagenotfound from "./components/Pagenotfound";
import Payment from "./components/Payment";
import Register from "./components/Register";
import Transactions from "./components/Transactions";
import ImageDisplay from "./components/ImageDisplay";

function App() {
  useEffect(() => {
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <Route path="/addcard" element={<AddCard />} />
            <Route path="/img" element={<ImageDisplay />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
