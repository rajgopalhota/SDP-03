import React, { useState, useRef } from "react";
import Captcha from "react-captcha-generator";

export default function Login() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [userCaptchaValue, setUserCaptchaValue] = useState("");
  const [captchaRefresh, setCaptchaRefresh] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleUserCaptchaChange = (event) => {
    setUserCaptchaValue(event.target.value);
  };

  const handleCaptchaClick = () => {
    // Toggle the captchaRefresh state to generate a new captcha
    setCaptchaRefresh(!captchaRefresh);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userCaptchaValue === captchaValue) {
      // If the captcha is entered correctly, redirect to the home page
      window.location.href = "/";
    } else {
      // If the captcha is not entered correctly, display an error message
      alert("Incorrect captcha");
    }
  };

  return (
    <>
      <div
        className="modal fade loginmodal"
        tabIndex="-5"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-content">
              <div className="container">
                <div
                  className="glass-card p-4 m-2 flex-fill loginmodal"
                  data-aos="flip-down"
                >
                  <h2>
                    Welcome to Vajra <i className="fa-solid fa-sack-dollar"></i>
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <br />
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-phone"></i>
                          </span>
                        </div>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <br />
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-5" onClick={handleCaptchaClick}>
                        <Captcha
                          key={captchaRefresh ? "refresh" : "normal"} // Force re-render on refresh
                          result={handleCaptchaChange}
                          textColor="white"
                          
                        />
                      </div>
                      <div
                        className="form-group col-md-5"
                        style={{ marginTop: "30px" }}
                      >
                        <input
                          type="text"
                          onChange={handleUserCaptchaChange}
                          placeholder="Enter captcha"
                          className="form-control captchatext"
                        />
                      </div>
                    </div>
                    <p>
                      Newbie?
                      <a data-toggle="modal" data-target=".signupmodal">
                        SignUp here
                      </a>
                    </p>
                    <div className="text-center loginbutton logbutton">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-paper-plane"></i>&nbsp;Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
