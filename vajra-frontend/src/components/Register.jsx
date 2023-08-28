import React from "react";

export default function Register() {
  return (
    <>
      <div
        className="modal fade signupmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-content">
              <div className="form_wrapper">
                <div className="form_container">
                  <div className="title_container">
                    <h2>Register yourself to Vajra Groups!</h2>
                  </div>
                  <div className="row clearfix">
                    <div className="">
                      <form>
                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input
                                type="text"
                                name="name"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input
                                type="text"
                                name="name"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input_field">
                          <span>
                            <i aria-hidden="true" className="fa fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="input_field">
                          <span>
                            <i aria-hidden="true" className="fa-solid fa-phone"></i>
                          </span>
                          <input
                            type="number"
                            name="number"
                            placeholder="phone"
                            required
                          />
                        </div>
                        <div className="input_field">
                          <span>
                            <i aria-hidden="true" className="fa fa-lock"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="input_field">
                          <span>
                            <i aria-hidden="true" className="fa fa-lock"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            placeholder="Re-type Password"
                            required
                          />
                        </div>
                        <div className="input_field radio_option">
                          <input type="radio" name="radiogroup1" id="rd1" />
                          <label for="rd1">Male</label>
                          <input type="radio" name="radiogroup1" id="rd2" />
                          <label for="rd2">Female</label>
                        </div>
                        <div className="input_field select_option">
                          <select>
                            <option>Select a country</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                          </select>
                          <div className="select_arrow"></div>
                        </div>
                        <div className="input_field checkbox_option">
                          <input type="checkbox" id="cb1" />
                          <label for="cb1">
                            I agree with terms and conditions
                          </label>
                        </div>
                        <div className="input_field checkbox_option">
                          <input type="checkbox" id="cb2" />
                          <label for="cb2">
                            I want to receive the newsletter
                          </label>
                        </div>
                        <input className="button" type="submit" value="Register" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
