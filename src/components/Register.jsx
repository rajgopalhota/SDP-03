import React from "react";

export default function Register() {
  return (
    <>
      <section className="loansection">
        <div
          className="loan-container"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <div className="form-container p-4">
                  <h3>
                    <i className="fas fa-user-plus fa-bounce"></i>&nbsp;
                    Registration Form
                  </h3>
                  <hr />
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-envelope"></i>
                            </span>
                          </div>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <i className="fas fa-phone"></i>
                            </span>
                          </div>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i class="fa-solid fa-key"></i>
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
                      <div className="form-group col-md-6">
                        <label htmlFor="reenterPassword">
                          Re-enter Password
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            id="reenterPassword"
                            placeholder="Re-enter Password"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-12">
                        <label className="gender-label">Gender</label>
                        <div className="gender-options">
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="male"
                              name="gender"
                              className="custom-control-input"
                              value="male"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="male"
                            >
                              {" "}
                              <i className="fas fa-mars"></i>&nbsp; Male
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="female"
                              name="gender"
                              className="custom-control-input"
                              value="female"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="female"
                            >
                              {" "}
                              <i className="fas fa-venus"></i>&nbsp; Female
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="imageUpload" className="filein">
                          <i class="fa-solid fa-id-badge"></i>&nbsp; Upload
                          Image
                        </label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="imageUpload"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="signatureUpload" className="filein">
                          <i class="fa-solid fa-signature"></i>&nbsp; Upload
                          Signature
                        </label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="signatureUpload"
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="aadharNumber">Aadhar Number</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i class="fa-regular fa-id-card"></i>
                            </span>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            id="aadharNumber"
                            placeholder="Aadhar Number"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="panNumber">PAN Number</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i class="fa-solid fa-address-card"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="panNumber"
                            placeholder="PAN Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center loginbutton bodybtn">
                      <button type="submit">
                        <i class="fa-solid fa-right-to-bracket"></i>&nbsp;
                        Register
                      </button>
                    </div>
                  </form>
                  <p
                    className="mt-3 text-center"
                    data-toggle="modal"
                    data-target=".loginmodal"
                  >
                    Already a user? Login here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
