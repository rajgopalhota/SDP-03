import './App.css';
import Home from './components/Home';
import Loans from './components/Loans';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import { Routes, Route } from 'react-router-dom'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payments' element={<Payment />} />
        <Route path='/loans' element={<Loans />} />
      </Routes>
    </div>
  );
}

export default App;
