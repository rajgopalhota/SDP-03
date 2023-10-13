import React from "react";
import BankImg from "./../assets/images/home.png";
import TextAni from "./TextAni";
import carloan from "./../assets/gifs/carloan.gif"
import health from "./../assets/gifs/health.gif"
import homeloan from "./../assets/gifs/homeloan.gif"
import loan from "./../assets/gifs/loan.gif"
import payment from "./../assets/gifs/payment.gif"

export default function Home() {
  return (
    <>
      <div className="row h-100">
        <div
          className="col-lg-6 col-sm-12 d-flex justify-content-center"
          style={{ backgroundColor: "lavender" }}
        >
          <div
            className="homeinfo text-center bounce-top"
          >
            <h2>
              Welcome to Vajra <TextAni />
            </h2>
            <img src={BankImg} alt="" className="img-fluid mb-3 floating" />
            <p>
              Our bank is committed to providing you with the best banking
              services. We have branches in over 100 cities across India and
              have been awarded "Best Bank htmlFor Customer Service" in 2023.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 homeright" style={{ backgroundColor: "lavenderblush" }}>
          <div className="glass-card  m-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h3 className="display-4">&nbsp;#1</h3>
              </div>
              <p>“Vajra Bank: Instant Personal Loans, Tailored for Your Aspirations.”</p>
              <img src={loan} className="image-fluid homedicards" alt="Image1" />
            </div>
          </div>

          <div className="glass-card  m-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h3 className="display-4">&nbsp;#2</h3>
              </div>
              <p>“Vajra Bank: Home Loans, Aligned with RBI Guidelines.”</p>
              <img src={homeloan} className="image-fluid homedicards" alt="Image2" />
            </div>
          </div>

          <div className="glass-card  m-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h3 className="display-4">&nbsp;#3</h3>
              </div>
              <p>“Affordable Health Insurances, Prioritizing Your Well-being.”</p>
              <img src={health} className="image-fluid homedicards" alt="Image3" />
            </div>
          </div>

          <div className="glass-card  m-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h3 className="display-4">&nbsp;#4</h3>
              </div>
              <p>“Vajra Bank: Car Loans, Lower Interest Rates for Your Journey.”</p>
              <img src={carloan} className="image-fluid homedicards" alt="Image4" />
            </div>
          </div>

          <div className="glass-card  m-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h3 className="display-4">&nbsp;#5</h3>
              </div>
              <p>"Swift Payments, Minimal Processing: Your Time is Valuable."</p>
              <img src={payment} className="image-fluid homedicards" alt="Image5" />
            </div>
          </div>
        </div>



      </div>
    </>
  );
}
