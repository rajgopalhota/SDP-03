import React from "react";
import UrlHelper from "./../UrlHelper";
import { toast } from "react-toastify";
import Tc from "./Tc";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  function submitRegistration(data, e) {
    console.log(data)
    UrlHelper.post("/reg", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },)
      .then((response) => {
        console.log("Backend", response.data)
        toast("Registration success");
        e.target.reset();
        navigate('/home');
      })
      .catch((error) => {
        toast("An error occured during regitration!");
      });
  }


  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    // Append the user data fields
    formData.append("firstName", e.target.elements.firstName.value);
    formData.append("lastName", e.target.elements.lastName.value);
    formData.append("email", e.target.elements.email.value);
    formData.append("phone", e.target.elements.phone.value);
    formData.append("password", e.target.elements.password.value);
    formData.append("reenterPassword", e.target.elements.reenterPassword.value);
    formData.append("gender", e.target.elements.gender.value);
    formData.append("aadharNumber", e.target.elements.aadharNumber.value);
    formData.append("panNumber", e.target.elements.panNumber.value);

    formData.append("imagePath", e.target.elements.imageUpload.files[0]);
    formData.append("signaturePath", e.target.elements.signatureUpload.files[0]);

    if (e.target.elements.password.value === e.target.elements.reenterPassword.value) {
      submitRegistration(formData, e);
    }
    else {
      toast.error("Password mismatch!")
    }
  }

  return (
    <>
      <section className="loansection">
        <div
          className="loan-container"
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
                  <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                            name="firstName"
                            placeholder="First Name"
                            required
                            pattern="[A-Za-z]+"
                            title="Name should only contain characters (A-Z, a-z)."
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
                            name="lastName"
                            placeholder="Last Name"
                            required
                            pattern="[A-Za-z]+"
                            title="Name should only contain characters (A-Z, a-z)."
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
                            name="email"
                            placeholder="Email"
                            required
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
                            name="phone"
                            placeholder="Phone"
                            required
                            pattern="\d{10}"
                            title="Valid phone number without country code"
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
                            name="password"
                            placeholder="Password"
                            required
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$"
                            title="Password must be at least 8 characters long and contain a combination of letters, digits, and special characters."
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
                            name="reenterPassword"
                            placeholder="Re-enter Password"
                            required
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$"
                            title="Password must be at least 8 characters long and contain a combination of letters, digits, and special characters."
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
                              required
                              title="Select any one"
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
                          name="imageUpload"
                          accept="image/*"
                          size="1048576"
                          required
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
                          name="signatureUpload"
                          accept="image/*"
                          size="1048576"
                          required
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
                            name="aadharNumber"
                            placeholder="Aadhar Number"
                            required
                            pattern="\d{10}"
                            title="Enter valid Aadhaar"
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
                            name="panNumber"
                            placeholder="PAN Number"
                            maxLength={10}
                            minLength={10}
                            required
                            title="Enter Valid Pan Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-md-12 text-center my-2">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="termsCheckbox"
                          required
                        />
                        <label className="custom-control-label" htmlFor="termsCheckbox">
                          I agree to the <a data-bs-toggle="offcanvas" href="#tcoffcanvas" role="button" aria-controls="offcanvasExample">Terms and Conditions</a>
                        </label>
                      </div>
                    </div>

                    <div className="text-center loginbutton bodybtn my-4">
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
        <Tc />
      </section>
    </>
  );
}
