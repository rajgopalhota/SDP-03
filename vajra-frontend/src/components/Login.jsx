import React from "react";

export default function Login() {
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
                  <form>
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
