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
import { useAuth } from "./AuthContext";
import UrlHelper from "./UrlHelper"

function App() {
  const auth = useAuth();

  useEffect(() => {
    async function getImages() {
      const phonedat = auth.user.phone;
      const imgresponse = await UrlHelper.get(
        `/images/${phonedat}/${"photo"}`,
        { responseType: "arraybuffer" }
      );
      const signresponse = await UrlHelper.get(
        `/images/${phonedat}/${"signature"}`,
        { responseType: "arraybuffer" }
      );

      const responseimagedata = imgresponse.data;
      const responsesignaturegedata = signresponse.data;

      const blob = new Blob([responseimagedata], { type: "image/png" });
      const imageURL = URL.createObjectURL(blob);

      const signblob = new Blob([responsesignaturegedata], {
        type: "image/png",
      });
      const signURL = URL.createObjectURL(signblob);
      auth.userImages(imageURL, signURL);
    }
    if (auth.user) {
      getImages();
    }
  }, [auth.user]);

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
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
