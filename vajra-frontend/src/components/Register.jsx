import React from "react";

export default function Register() {
  return (
    <>
      <div class="container col-md-8">
        <div class="row justify-content-center">
          <div class="col-md-12 glassmorphism-container">
            <h2 class="text-center mb-4">Registration Form</h2>
            <form>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-6">
                    <label for="firstName">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="reenterPassword">Reenter Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="reenterPassword"
                  placeholder="Reenter Password"
                />
              </div>
              <div class="form-group">
                <label>Gender</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="aadharNumber">Aadhar Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="aadharNumber"
                  placeholder="Aadhar Number"
                />
              </div>
              <div class="form-group">
                <label for="panNumber">PAN Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="panNumber"
                  placeholder="PAN Number"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </form>
            <p class="mt-3 text-center">
              Already a user? <a href="#">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
